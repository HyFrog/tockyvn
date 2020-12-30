import { BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from "./components/layout/layout";
import QuickTyping from "./page/quick-typing/quick-typing";
import RuleDetail from "./page/rule-detail/rule-detail";
import Statistic from "./page/statistic/statistic";
import RuleLearning from './page/rule-learning/rule-learning';
import LuyenGoTu from './page/LuyenGoTu/LuyenGoTu';
import LuyenGoCau from './page/LuyenGoCau/LuyenGoCau';
import LuyenGoDoan from './page/LuyenGoDoan/LuyenGoDoan';
import { ThongkeContext } from "./context/Context";
import { Component } from "react";

import "./app-loader.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.setContextData = arr => {
      localStorage.setItem('arr', arr)
      this.setState({
        contextData: arr
      });
    };


    this.state = {
      contextData: localStorage.getItem('arr') != null ? localStorage.getItem('arr').split(',') : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      setContextData: this.setContextData,
    };
  }
  render() {
    return (
      <ThongkeContext.Provider value={this.state}>
        <Router>
          <Layout>
            <Switch>
              <QuickTyping exact path="/" />
              <QuickTyping exact path="/quick-typing" />
              <RuleDetail exact path="/RuleDetail" />
              <Statistic exact path="/statistic" />
              <RuleLearning exact path='/hocquytac' />
              <LuyenGoTu exact path='/luyengotu' />
              <LuyenGoCau exact path='/luyengocau' />
              <LuyenGoDoan exact path='/luyengodoan' />
            </Switch>
          </Layout>
        </Router>
      </ThongkeContext.Provider>
    );
  }
}


export default App;
