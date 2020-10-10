import React, { Component } from "react";
import Menu from "../../../assets/svgs/menu.svg";
import { processService } from "../../../services/processService.js";

export class InsightPreview extends Component {
  state = {
    isEditMode: false,
    insightToEdit: this.props.insight,
  };
  onChaneEditMode = () => {
    this.setState({ isEditMode: true });
  };
  onCloseEditMode = () => {
    this.setState({ isEditMode: false });
  };
  onChange = (ev) => {
    let fieldName = ev.target.name;
    let value =
      ev.target.type === "number" ? +ev.target.value : ev.target.value;
    let insightToEditCopy = JSON.parse(
      JSON.stringify(this.state.insightToEdit)
    );
    insightToEditCopy[fieldName] = value;
    this.setState({ insightToEdit: insightToEditCopy });
  };
  onSaveInsightsData = () => {
    const { id } = this.props.insight;
    const { insightToEdit } = this.state;
    processService.saveInsight(id, insightToEdit);
    this.onCloseEditMode();
  };
  onCancelEdit = async () => {
    const { id } = this.props.insight;
    const insight = await processService.getInsightById(id);
    this.setState({insightToEdit:insight})
    this.onCloseEditMode();
  };
  render() {
    const { insight } = this.props;
    const { isEditMode, insightToEdit } = this.state;
    return (
      <div className="container">
        <div className="insight-container grid">
          <div className="display-order">{insight.displayOrder}</div>
          <div className="flex insight-text column">
            {!isEditMode ? (
              <div>{insightToEdit.data}</div>
            ) : (
              <textarea
                onChange={this.onChange}
                name="data"
                value={insightToEdit.data}
              ></textarea>
            )}
            {!isEditMode ? (
              <div className="statistics-continer">
                <span>
                  {insight.statistics.publishedContributesCount} משתתפים תומכים
                  בתובנה
                </span>
                <span>
                  {" "}
                  ({insight.statistics.publishedContributersPresent}% מהתשובות)
                </span>
              </div>
            ) : (
              <div className="edit-btns-container">
                <button onClick={this.onCancelEdit} className="cancel-btn">
                  ביטול
                </button>
                <button onClick={this.onSaveInsightsData} className="save-btn">
                  שמירה
                </button>
              </div>
            )}
          </div>
          <img onClick={this.onChaneEditMode} alt="menu" src={Menu}></img>
        </div>
      </div>
    );
  }
}

export default InsightPreview;
