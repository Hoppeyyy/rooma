import axios from "axios";
import { server_api } from "../config/env.config";
import api from "./axios";

const serverCrash =
  "Wow the server MAY have crashed...be a hero, and tell Hailey, Jason or Sean ASAP. Please also remember the steps leading to this.";

const createEvent = (event_obj, cb) => {
  console.log("2222event_obj.startAtevent_obj.startAt: " + event_obj.startAt);
  console.log(event_obj);
  axios
    .post(`${server_api}event/create`, event_obj, {
      withCredentials: true,
    })
    .then((response) => {
      console.log("createEvent response");
      console.log(response);
      cb(null, response);
    })
    .catch((error) => {
      console.log("createEvent error");
      console.log(error);
      if (!error.response) {
        cb(new Error(serverCrash));
      } else {
        console.log(error);
        cb(
          "Event creation failed, please check your credential, or contact Hailey, Jason or Sean"
        );
      }
    });
};


const deleteEvent = (delete_id, cb) => {
  axios
    .delete(`${server_api}event/delete/${delete_id}`, {
      withCredentials: true,
    })
    .then((response) => {
      cb(null, response);
    })
    .catch((error) => {
      if (!error.response) {
        cb(new Error(serverCrash));
      } else {
        console.log(error);
        cb(
          "deleteEvent failed, please check your credential, or contact Hailey, Jason or Sean"
        );
      }
    });
};

const getEvents = async (query, cb) => {
  console.log("sssssssssssssssssssssssss");
  console.log("sssssssssssssssssssssssss");
  console.log(query);
  axios
    .get(`${server_api}event/list${query}`, {
      withCredentials: true,
    })
    .then((response) => {
      console.log("getEvents response");
      console.log(response);
      cb(null, response);
    })
    .catch((error) => {
      console.log("getEvents error");
      console.log(error);
      if (!error.response) {
        cb(new Error(serverCrash));
      } else {
        cb(error.response.data);
      }
    });
};

export { getEvents, createEvent, deleteEvent };
