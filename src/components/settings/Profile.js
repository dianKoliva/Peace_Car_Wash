import React from "react";
import SavedInputs from "./SavedInputs.js";
import NotificationSettings from "./NotificationSettings.js";

export default function Profile() {
  return (
    <div>
      <div className="">
        <SavedInputs></SavedInputs>
      </div>

      <div className="mt-10">
        <NotificationSettings></NotificationSettings>
      </div>
    </div>
  );
}
