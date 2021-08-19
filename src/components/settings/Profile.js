import React from "react";
import SavedInputs from "./SavedInputs.js";
import NotificationSettings from "./NotificationSettings.js";
import Dashboard from "../../layout/Dashboard.js";

export default function Profile() {
  return (
    <Dashboard>
    <div className="ml-20">
      <div className="">
        <SavedInputs></SavedInputs>
      </div>

      <div className="mt-10">
        <NotificationSettings></NotificationSettings>
      </div>
    </div>
    </Dashboard>
  );
}
