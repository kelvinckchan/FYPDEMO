import React from 'react'
import { ScrollView,  Image, View ,Alert} from 'react-native'
import {Container, Header, Title, Content, Left, Right, Body, Icon, Text, Card, CardItem, Thumbnail, Button, Text as NBText } from 'native-base'
import { Images } from '../Themes'
// Styles
import styles from './Styles/FrameStyle'
import CardTemplate from '../Components/CardTemplate'

import ChartsStyle from '../Components/Styles/ChartsStyle'
import BarChartScreen from '../Components/charts/BarChartScreen'
import AxisLineChartScreen from '../Components/charts/AxisLineChartScreen'
import CandleStickChartScreen from '../Components/charts/CandleStickChartScreen'
import HorizontalBarChartScreen from '../Components/charts/HorizontalBarChartScreen'
import LineChartScreen from '../Components/charts/LineChartScreen'
import PieChartScreen from '../Components/charts/PieChartScreen'
import RadarChartScreen from '../Components/charts/RadarChartScreen'
import ScatterChartScreen from '../Components/charts/ScatterChartScreen'
import StackedBarChartScreen from '../Components/charts/StackedBarChartScreen'
import TimeSeriesLineChartScreen from '../Components/charts/TimeSeriesLineChartScreen'
import ZeroLineChartScreen from '../Components/charts/ZeroLineChartScreen'


export default class ChartShowCase extends React.Component {
  state={
  };

  render () {
       let Starss=this.state.stars;
    return (
      <View style={styles.mainContainer}>
         <Content padder>
         <CardTemplate
          CardTitle={
            <View>
            <Text>BarChartScreen</Text>
            <Text note>April 15, 2016</Text>
            </View>}
          CardBody={
            <View style={ChartsStyle.charts}>
               <BarChartScreen/>
           </View>}
                    />

           <CardTemplate CardTitle={
             <View>
             <Text>AxisLineChartScreen</Text>
             <Text note>April 15, 2016</Text>
             </View>}
           CardBody={
             <View style={ChartsStyle.charts}>
               <AxisLineChartScreen/>
            </View>}
                      />

           <CardTemplate CardTitle={
             <View>
             <Text>Candle Stick Chart</Text>
             <Text note>April 15, 2016</Text>
             </View>}
           CardBody={
             <View style={ChartsStyle.charts}>
               <CandleStickChartScreen/>
            </View>}
                      />

          <CardTemplate CardTitle={
            <View>
            <Text>Line Chart</Text>
            <Text note>April 15, 2016</Text>
            </View>}
          CardBody={
            <View style={ChartsStyle.charts}>
               <LineChartScreen/>
           </View>}
                    />

           <CardTemplate CardTitle={
             <View>
             <Text>Pie Chart</Text>
             <Text note>April 15, 2016</Text>
             </View>}
           CardBody={
             <View style={ChartsStyle.charts}>
                 <PieChartScreen/>
            </View>}
                      />

          <CardTemplate CardTitle={
            <View>
            <Text>Radar Chart</Text>
            <Text note>April 15, 2016</Text>
            </View>}
          CardBody={
            <View style={ChartsStyle.charts}>
                  <RadarChartScreen/>
           </View>}
                    />

         <CardTemplate CardTitle={
           <View>
           <Text>Scatter Chart</Text>
           <Text note>April 15, 2016</Text>
           </View>}
         CardBody={
           <View style={ChartsStyle.charts}>
              <ScatterChartScreen/>
          </View>}
                    />

          <CardTemplate CardTitle={
            <View>
            <Text>Stacked Bar Chart</Text>
            <Text note>April 15, 2016</Text>
            </View>}
          CardBody={
            <View style={ChartsStyle.charts}>
                <StackedBarChartScreen/>
           </View>}
                    />

         <CardTemplate CardTitle={
           <View>
           <Text>Time Series Line Chart</Text>
           <Text note>April 15, 2016</Text>
           </View>}
         CardBody={
           <View style={ChartsStyle.charts}>
             <TimeSeriesLineChartScreen/>
          </View>}
                    />

          <CardTemplate CardTitle={
            <View>
            <Text>Zero Line Chart</Text>
            <Text note>April 15, 2016</Text>
            </View>}
          CardBody={
            <View style={ChartsStyle.charts}>
                <ZeroLineChartScreen/>
           </View>}
                    />
      </Content>
    </View>
    )
  }
}
