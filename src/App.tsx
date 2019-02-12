import React, { Suspense, useState, useEffect, useRef } from 'react';
import './App.css';
import { ctss as c, bg, display, text, textStyle, px, py, justify, listReset, border, my } from "./tailwind/functions";

import HomePage from "./pages/home/Home";
const AlertsPage = React.lazy(() => import("./pages/alerts/Alerts"));
const ButtonsPage = React.lazy(() => import("./pages/buttons/Buttons"));
const NavigationPage = React.lazy(() => import("./pages/navigation/Navigation"));
const SourcePage = React.lazy(() => import("./pages/source"));

type Section = "home" | "button" | "alert" | "navigation" | "source";
type RoutePath = "/" | "/button" | "/alert" | "/navigation" | "/source";

function parsePath(path: RoutePath): { section: Section } {
  if (path === "/") {
    return {
      section: "home"
    };
  }

  const suffix = path.substring(1);
  return { section: suffix as Section };
}

type Action = { type: "changeSection", payload: { section: Section } }

interface State {
  section: Section;
}

function stateReducer(state: State, { type, payload }: Action): State {
  switch (type) {
    case "changeSection":
      return { ...state, section: payload.section };
    default:
      return state;
  }
}

type Router<Path extends string> = {
  path: Path;
  push: (path: Path) => void;
  onLinkClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

function useURL<Path extends string>(): Router<Path> {
  const [path, setPath] = useState(window.location.pathname as Path);
  const setPathRef = useRef(setPath);

  function onPopstate() {
    setPathRef.current(window.location.pathname as Path);
  }

  function push(path: Path) {
    window.history.pushState(null, "", path);
    setPathRef.current(path);
  }
  
  function onLinkClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    const newURL = event.currentTarget.pathname as Path;
    push(newURL);
  }

  useEffect(() => {
    setPathRef.current = setPath;
  });

  useEffect(() => {
    window.addEventListener("popstate", onPopstate);

    return () => {
      window.removeEventListener("popstate", onPopstate);
    }
  }, []);

  return { path, push, onLinkClick };
}

function NavLink({ href, children, router }: { href: RoutePath, children: React.ReactNode, router: Router<RoutePath> }): JSX.Element {
  const active = href === router.path;

  return (
    <a href={href} onClick={router.onLinkClick} className={c(
      display("block"),
      px("4"),
      py("4"),
      text(active ? "blue-lighter" : "grey-lightest"),
      textStyle("no-underline"),
      border({b: "4"}, active ? "blue-lighter" : "transparent")
    )}>{ children }</a>
  );
}

function App(): JSX.Element {
  const router = useURL<RoutePath>();
  const { section } =  parsePath(router.path);

  return (
    <div className="App">
      <nav>
        <ul className={c(bg("blue-darkest"), display("flex"), justify("center"), listReset())}>
          <li>
            <NavLink href="/" router={router}>Home</NavLink>
          </li>
          <li>
            <NavLink href="/alert" router={router}>Alerts</NavLink>
          </li>
          <li>
            <NavLink href="/button" router={router}>Buttons</NavLink>
          </li>
          <li>
            <NavLink href="/navigation" router={router}>Navigation</NavLink>
          </li>
          <li>
            <NavLink href="/source" router={router}>Source</NavLink>
          </li>
        </ul>
      </nav>
      <main className="max-w-lg mx-auto px-3 py-8">
        <Suspense fallback={<p>Loading…</p>}>
          {section === "home" && <HomePage />}
          {section === "button" && <>
            <h1>Buttons</h1>
            <ButtonsPage />
          </>}
          {section === "alert" && <>
            <h1>Alerts</h1>
            <AlertsPage />
          </>}
          {section === "navigation" && <>
            <h1>Navigation</h1>
            <NavigationPage />
          </>}
          {section === "source" && <>
            <h1>Source</h1>
            <SourcePage />
          </>}
        </Suspense>
      </main>
    </div>
  );
}

export default App;
