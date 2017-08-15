
class Helpers = () => {
  getArray = (hours) => {
    if (hours === 3)
      return this.state.three_hours;
    if (hours === 4)
      return this.state.four_hours;
    if (hours === 5)
      return this.state.single_hours;
  }

  getFinals = () => {
    if (this.state.hours === 3)
      return UGRAD_THREE_JSON;
    if (this.state.hours === 4)
      return UGRAD_FOUR_JSON;
    if (this.state.hours === 5)
      return SINGLES_JSON;
  }

  getProgress = () => {
    if (this.state.showOrHide && this.state.showClasses) return 100;
    if (this.state.showOrHide) return 66;
    else return 33;
  }

  // this can be refactored
  displayNextStep = (ComponentStorage, Component, flag) => {
    if (flag) return (ComponentStorage = Component)
  }
}

export Helpers
