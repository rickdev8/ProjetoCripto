import express from "express";
import cors from "cors";
import User from "./UserRoute.js";
import session from "express-session";
import cookieParser from "cookie-parser";


const routes = (app) => {

  app.use(
    session({
      secret: "keyboard cat",
      saveUninitialized: true,
      resave: false,
      cookie: { secure: false },
    })
  );
  
  app.use(cors({
    credentials: true, origin: ["http://localhost:5173"]
  }));
  app.use(express.json(), User);
  app.use(cookieParser())
 
};



export default routes;
