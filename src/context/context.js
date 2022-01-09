import axios from "axios";
import React, { useState, useContext, useReducer, useEffect } from "react";
import { reducer } from "./Reducer";

const AppContext = React.createContext();

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

const AppProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSucces] = useState(false);
  const [file, setFile] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
    setUsername("");
    setPassword("");
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const handleWriteSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: state.user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("http://localhost:5000/upload", data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const response = await axios.post("http://localhost:5000/posts", newPost);
      window.location.replace(`/posts/${response.data._id}`);
    } catch (error) {}
  };

  const handleDeletePost = async (path) => {
    const currentUsername = state.user.username;
    try {
      await axios.delete(`http://localhost:5000/posts/${path}`, {
        data: { username: currentUsername },
      });
      window.location.replace("http://localhost:3000");
    } catch (error) {
      console.log(error);
    }
  };

  const updatePost = async (path) => {
    const currentUsername = state.user.username;
    try {
      await axios.put(`http://localhost:5000/posts/${path}`, {
        username: currentUsername,
        title,
        desc,
      });
      setIsUpdate(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserUpdate = async (e) => {
    dispatch({ type: "UPDATE_START" });

    e.preventDefault();
    const updatedUser = {
      userId: state.user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("http://localhost:5000/upload", data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const response = await axios.put(
        `http://localhost:5000/users/${state.user._id}`,
        updatedUser
      );
      setSucces(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AppContext.Provider
      value={{
        handleSubmit,
        username,
        password,
        setUsername,
        setPassword,
        handleLogout,
        title,
        desc,
        file,
        setTitle,
        setEmail,
        setDesc,
        setFile,
        handleWriteSubmit,
        handleDeletePost,
        isUpdate,
        setIsUpdate,
        updatePost,
        handleUserUpdate,
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
