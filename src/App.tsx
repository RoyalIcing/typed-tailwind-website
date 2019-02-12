import React, { Suspense, useReducer, useState, useEffect, useRef, useCallback } from 'react';
import './App.css';
import { ctss as c, bg, display, text, textStyle, px, py, items, justify } from "./tailwind/functions";

const AlertsPage = React.lazy(() => import("./pages/Alerts"));
const ButtonsPage = React.lazy(() => import("./pages/Buttons"));

type Section = "button" | "alert";
type RoutePath = "/button" | "/alert";

function parsePath(path: RoutePath): { section: Section } {
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

function useURL<Path extends string>(): { path: Path, push: (path: Path) => void, onLinkClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void } {
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

function NavLink({ href, children, onClick }: { href: RoutePath, children: React.ReactNode, onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void }): JSX.Element {
  return (
    <a href={href} onClick={onClick} className={c(
      display("block"),
      px("4"),
      py("4"),
      text("white"),
      textStyle("no-underline")
    )}>{ children }</a>
  );
}

function App(): JSX.Element {
  const router = useURL<RoutePath>();
  const { section } =  parsePath(router.path);

  return (
    <div className="App">
      <nav>
        <ul className={c(bg("blue-darkest"), display("flex"), justify("center"))}>
          <li>
            <NavLink href="/alert" onClick={router.onLinkClick}>Alerts</NavLink>
          </li>
          <li>
            <NavLink href="/button" onClick={router.onLinkClick}>Buttons</NavLink>
          </li>
        </ul>
      </nav>
      <main className="max-w-lg mx-auto px-3 py-8">
        <Suspense fallback={<p>Loading…</p>}>
          {section === "button" && <>
            <h1>Buttons</h1>
            <ButtonsPage />
          </>}
          {section === "alert" && <>
            <h1>Alerts</h1>
            <AlertsPage />
          </>}
        </Suspense>
      </main>
    </div>
  );
}

export default App;
