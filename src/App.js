import React from "react";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/Chat";
import Welcome from "./components/Welcome";

// const style = {
//   appContainer: `max-w-[728px] mx-auto text-center`,
//   sectionContainer: `flex flex-col h-[90vh] mt-10 shadow-xl border relative`,
// };

function App() {
  const [user] = useAuthState(auth);
  return user ? <Chat /> : <Welcome />;
}

export default App;
