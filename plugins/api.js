export default function ({ $axios, redirect }) {
  // 根据环境变量设置baseUrl
  // $axios.defaults.baseURL = '/api';
  // if(process.env.NODE_ENV === 'development'){
  //     $axios.defaults.baseURL = 'http://82.157.144.230/api';
  // }else if(process.env.NODE_ENV === 'debug'){
  //     $axios.defaults.baseURL = 'http://82.157.144.230/api';
  // }else if(process.env.NODE_ENV === 'product'){
  //     $axios.defaults.baseURL = 'http://82.157.144.230/api';
  // }

  $axios.onRequest((config) => {
    // console.log(config.baseURL)
  })

  $axios.onResponse((response) => {
    if (response.data.status === 1) {
      return response.data
    }
  })

  $axios.onRequestError((err) => {
    console.log(err)
  })

  $axios.onResponseError((err) => {
    console.log(err)
  })
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
