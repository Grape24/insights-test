import React, { Component } from 'react';
import {processService} from '../services/processService';
import InsightsList from '../components/InsightsList/InsightsList';

export class insightsPage extends Component {
    state={
        process: null,
    }
    async componentDidMount(){
        var process = await processService.query();
        this.setState({process});
    }
    render() {
        const {process} = this.state;
        return (
            <div>
                {process && <InsightsList onOpenEditMode={this.onOpenEditMode} insights={process.insights}></InsightsList>}
            </div>
        )
    }
}

export default insightsPage
