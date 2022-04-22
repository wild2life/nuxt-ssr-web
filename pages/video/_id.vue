<template>
  <div class="play-wrap">
    <div class="container">
      <div class="body flex justify-between padding-top">
        <div class="main">
          <div class="player-section-wrap">
            <video-player
              ref="videoPlayer"
              class="video-player vjs-custom-skin"
              :playsinline="true"
              :options="playerOptions"
              @play="onPlayerPlay($event)"
              @pause="onPlayerPause($event)"
            ></video-player>
          </div>
          <div class="player-title">{{ videoInfo.title }}</div>
          <div class="share-section">
            <!-- todo -->
          </div>
        </div>
        <div class="side flex-sub">
          <div
            id="videoListWrap"
            class="video-list-wrap pgc-list"
            static="bl=vlist"
          >
            <h2 class="h2-side-tt">
              <span class="sp-side-tt">相关视频</span>
            </h2>
            <div id="playerRightInnerList" class="player-right-innerlist"></div>
            <div class="scroll-panel">
              <div
                class="content-panel tab-content video-normal lh-duration"
                style="width: 273px; top: 0"
              >
                <div id="episodeWrapCont" class="tab-panel episode-wp active">
                  <div id="videoListRoot">
                    <ul class="videos">
                      <li
                        v-for="(item, index) in list"
                        :key="index"
                        class="video-item"
                        :class="{
                          first: !index,
                          last: index === list.length - 1,
                          current: false,
                        }"
                        data-episode=""
                      >
                        <span class="crop">
                          <NuxtLink :to="item.video_id.toString()">
                            <img :src="item.img" :alt="item.title" />
                            <span class="s-play">
                              <img src="~/assets/image/video.png" alt="" />
                            </span>
                            <span
                              v-if="item.publish_time"
                              class="sp-duration"
                              >{{ item.publish_time }}</span
                            >
                          </NuxtLink>
                        </span>
                        <span class="title">
                          <NuxtLink :to="item.video_id.toString()">
                            <p class="intro">
                              {{ item.title }}
                            </p>
                          </NuxtLink>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VideoId',
  layout: 'default',
  async asyncData({ app, route }) {
    const { $axios, store } = app
    const [videoInfo, layout] = await Promise.all([
      $axios.get(`videos/${route.params.id}`),
      $axios.get('layout'),
    ])
    store.commit('setting/SET_LAYOUT', layout.data)
    return {
      videoInfo: videoInfo.data.info,
      list: videoInfo.data.list,
      layout: layout.data,
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: 'video/mp4',
            src: videoInfo.data.info.link,
          },
        ],
        poster: videoInfo.data.info.img,
        width: '100%',
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
      },
    }
  },
  head() {
    return {
      title: this.layout.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.layout.description,
        },
        { hid: 'keyword', name: 'keyword', content: this.layout.keyword },
      ],
    }
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    },
  },
  methods: {
    onPlayerPlay(player) {},
    onPlayerPause(player) {},
  },
}
</script>
<style scoped lang="scss">
.hide {
  display: none;
}

.play-wrap {
  background: $video-bg-color;
  width: 1200px;
  margin: 0 auto;

  .container {
    background-color: $video-bg-color;
    // width: 1180px;
    width: 1200px;
    margin: 0 auto;
    padding-top: 0;
  }

  .body {
    background-color: $video-bg-color;

    .main {
      width: 880px;
      // float: left;
    }
  }

  .player-title {
    color: #fff;
    font-size: 30px;
    margin-top: 30px;
  }
  .player-section-wrap {
    height: 488px;
    position: relative;

    // .player-section {
    //   height: 100%;

    //   img {
    //     width: 100%;
    //     height: 488px - 43px;
    //   }
    // }
  }
}

.side {
  // position: relative;
  // margin-left: 900px;
  margin-bottom: 10px;
  background: #222329;
  padding-left: 20px;

  .h2-side-tt {
    line-height: 40px;
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    margin-bottom: 10px;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      background: $primary-color;
      height: 20px;
      width: 3px;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
    }

    .sp-side-tt {
      padding-left: 15px;
    }
  }

  .pgc-list .scroll-panel {
    height: 585px;
    overflow: hidden;
    position: relative;
    // todo
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
      // width: 7px;
      // height: 10px;
      // background-color: $primary-color;
    }

    .content-panel {
      position: absolute;
      width: 273px;
      top: 0px;
    }
  }
}

.video-list-wrap {
  .video-item {
    overflow: hidden;
    padding-top: 10px;
    position: relative;
  }
  .s-play {
    position: absolute;
    width: 22px;
    height: 22px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 22px;
      height: 22px;
    }
  }

  .crop {
    float: left;
    width: 116px;
    position: relative;
    margin-right: 10px;
    border: 2px solid transparent;

    a {
      height: 67px;
      overflow: hidden;
      display: block;
      img {
        width: 100%;
      }
    }
  }

  .title {
    display: block;
    overflow: hidden;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 5px;

    .intro {
      line-height: 16px;
      height: 32px;
      font-size: 13px;
      overflow: hidden;
      color: #fff;
      text-align: left;
      margin-bottom: 10px;
    }

    .num {
      display: inline-block;
      text-align: left;
      width: auto;
      max-width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #666668;
    }
  }
}
</style>
