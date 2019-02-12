import React, { Suspense, useReducer, useState, useEffect, useRef } from 'react';
import './App.css';

const AlertPage = React.lazy(() => import("./pages/Alert"));

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

function App(): JSX.Element {
  const [localState, dispatch] = useReducer(stateReducer, { section: "button" });
  const router = useURL<RoutePath>();
  const { section } =  parsePath(router.path);

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <a href="/button" onClick={router.onLinkClick}>Button</a>
          </li>
          <li>
            <a href="/alert" onClick={router.onLinkClick}>Alert</a>
          </li>
        </ul>
      </nav>
      <main className="max-w-lg mx-auto px-3">
        <Suspense fallback={<p>Loading…</p>}>
          {section === "button" && <>
            <h1>Button</h1>
          </>}
          {section === "alert" && <>
            <h1>Alert</h1>
            <AlertPage />
          </>}
        </Suspense>
      </main>
    </div>
  );
}

export default App;
