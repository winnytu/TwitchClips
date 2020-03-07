
var vm = new Vue({
	el:"#app",
	data:{
		Allclips: [],
		Weeklyclips: [],
		Show: 'week',
		Keywords: ''

	},

	mounted(){
		let APIurl1="https://api.twitch.tv/kraken/clips/top?language=zh-tw&limit=50&period=all"
		let APIurl2="https://api.twitch.tv/kraken/clips/top?language=zh-tw&limit=50"
	
		function GetAll(){
		return axios({
		method:'get',
        url:APIurl1,
        headers:{'Client-ID':'991fj2s7nziprtg9a6hujhcmzryvfo','Accept':'application/vnd.twitchtv.v5+json' 
  		}})
		}

		function GetWeekly(){
		return axios({
		method:'get',
        url:APIurl2,
        headers:{'Client-ID':'991fj2s7nziprtg9a6hujhcmzryvfo','Accept':'application/vnd.twitchtv.v5+json' 
  		}
		})
		}	
		
		axios.all([GetAll(), GetWeekly()])
			.then(axios.spread((Allresponse, Weeklyresponse)=>{
				this.Allclips= Allresponse.data.clips
				this.Weeklyclips= Weeklyresponse.data.clips
			}))
		},
})

