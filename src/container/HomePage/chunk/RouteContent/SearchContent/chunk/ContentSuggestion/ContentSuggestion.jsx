import React from "react";
import "./ContentSuggestion.css";
import SuggesstionItem from "./chunk/SuggesstionItem";
const ContentSuggestion = () => {
  return (
    <div className="ContentSuggestion">
      <div className="suggestionText">Suggestion follow</div>

      <SuggesstionItem />
      <SuggesstionItem />
      <SuggesstionItem />
      <SuggesstionItem />
    </div>
  );
};

export default ContentSuggestion;
