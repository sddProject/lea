<template>
  <div class="earning" style="background-color: #b5d592">
    <earnings-profile></earnings-profile>
    <earnings-overview></earnings-overview>
    <earnings-trends></earnings-trends>
    <earnings-analysis></earnings-analysis>
  </div>
</template>
<script>
import {http} from '../config'
import EarningsProfile from '../components/Earnings/EarningsProfile'
import EarningsOverview from '../components/Earnings/EarningsOverview'
import EarningsTrends from '../components/Earnings/EarningsTrends'
import EarningsAnalysis from '../components/Earnings/EarningsAnalysis'
export default {
  name: 'earning',
  data: function () {
    return {
      http: http
    }
  },
  components: {
    EarningsProfile,
    EarningsOverview,
    EarningsTrends,
    EarningsAnalysis
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  padding: 0;
  margin: 0;
}
.earning{
  margin-bottom:60px;
}
</style>
