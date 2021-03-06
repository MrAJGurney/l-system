class ControlPanelController {
  constructor(controlPanelModel, controlPanelView, eventBus) {
    this.controlPanelModel = controlPanelModel;
    this.controlPanelView = controlPanelView;
    this.eventBus = eventBus;

    this._publishOptionSelected = this._publishOptionSelected.bind(this);

    this._configureSelectElement();
  }

  _configureSelectElement() {
    const {
      controlPanelModel,
      controlPanelView,
    } = this;

    const lSystems = controlPanelModel.getLSystemConfigs();
    controlPanelView.populateSelectElement(lSystems);
    controlPanelView.addListenerToSelectElement(this._publishOptionSelected);
  }

  _publishOptionSelected() {
    const {
      controlPanelView,
      eventBus,
    } = this;

    const selectedOption = controlPanelView.getSelectedOption();
    eventBus.publish('ON_CONFIG_SELECTED', {
      lSystemKey: selectedOption,
    });
  }
}

export default ControlPanelController;
