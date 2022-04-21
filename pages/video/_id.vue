<template>
  <div class="play-wrap">
    <div class="container">
      <div id="pallcommoncolumnad"></div>
      <div class="body">
        <div class="main">
          <div class="player-section-wrap">
            <div
              id="playerSection"
              class="player-section bdv-video-player-contianer play-mode-vd play-status-pause"
            >
              <!-- <video
                class="video-player"
                webkit-playsinline=""
                x-webkit-airplay="allow"
                autoplay=""
                preload="auto"
                src="http://pgcvideo-cdn.xiaodutv.com/3257879290_289547599_2017090615523720170906163214.mp4?authorization=bce-auth-v1%2Fc308a72e7b874edd9115e4614e1d62f6%2F2017-09-06T08%3A47%3A48Z%2F-1%2F%2F0b699cc8c2185e0de81b971d773904691b2f0fd245fbd55219287823947b1fd3&amp;responseCacheControl=max-age%3D8640000&amp;responseExpires=Fri%2C+15+Dec+2017+16%3A47%3A48+GMTmp4&amp;time=1647865339&amp;xcode=14167990a818ef8ec2fd446646f9fce6258a05ac1c85319f&amp;_=1647781678730"
                style="width: 100%; height: 100%"
              ></video> -->
              <img :src="videoInfo.img" alt="" />
              <div class="adv-timer" style="display: none"></div>
              <a
                class="ad-link-layer"
                target="_blank"
                style="display: none"
              ></a>
              <div class="player-poster" style="display: none"></div>
              <div class="play-loading" style="display: block"></div>
              <div class="player-control">
                <div class="control-cover" style="display: block">
                  <span class="play-icon play-icon-pause"></span>
                  <div class="control-bar">
                    <div class="bg"></div>
                    <span class="play-icon"></span>
                    <span class="time">02:59/04:05</span>
                    <div class="progress-bar progress-bar-el">
                      <div class="progress-track"></div>
                      <div class="progress-pass" style="width: 73.0322%">
                        <span class="cur"></span>
                        <span class="cur-heart"></span>
                      </div>
                    </div>
                    <div class="progress-bar volumn-bar">
                      <div class="progress-track"></div>
                      <div class="progress-pass" style="width: 50%">
                        <span class="cur"></span>
                        <span class="cur-heart"></span>
                      </div>
                    </div>
                    <span class="zoom-in"></span>
                    <div class="adv-mute"></div>
                  </div>
                </div>
              </div>
              <div class="player-tips-container" style="display: none">
                <div class="player-tips-wrap">
                  <div class="player-tips-image"></div>
                  <div class="player-tips-title">
                    您的浏览器暂不支持视频自动播放
                  </div>
                  <div class="player-tips-btn">点击播放</div>
                </div>
              </div>
            </div>

            <div id="playerPauseAdv" class="player-pause-adv hide"></div>
            <div id="PCPlaypageSticker" class="player-playing-adv hide"></div>
          </div>
          <div class="player-title">{{ videoInfo.title }}</div>
          <div class="share-section">
            <!-- todo -->
          </div>
        </div>
        <div class="side">
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
                          <a
                            :href="item.href"
                            :title="item.title"
                            static="to=play&amp;stp=po"
                          >
                            <img :src="item.src" :alt="item.title" />
                            <span class="s-play"></span>
                            <span class="s-mask"></span>

                            <span class="sp-duration">{{
                              item.publish_time
                            }}</span>
                          </a>
                        </span>
                        <span class="title">
                          <a
                            :href="item.href"
                            :title="item.title"
                            static="to=play&amp;stp=ti"
                          >
                            <p class="intro">
                              {{ item.title }}
                            </p>

                            <!-- <span class="num">
                              <span class="s-status"> 播放中 </span>

                              <i class="icon-play-cont"></i>3.4万热力值
                            </span> -->
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <p class="loading" style="display: none">加载中...</p>
              <div class="scroll-bar">
                <span class="holder" style="height: 94px; top: 0"></span>
              </div>
            </div>
          </div>
          <!-- <div id="pcAnyPageIndexAd" class="index-ad"></div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VideoPage',
  layout: 'default',
  async asyncData({ app, route }) {
    const { $axios } = app
    const [videoInfo] = await Promise.all([
      $axios.get(`videos/${route.params.id}`),
    ])
    return {
      videoInfo: videoInfo.data.info,
      list: videoInfo.data.list,
    }
  },
  head() {
    return {
      title: '视频',
    }
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
      float: left;
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

    .player-section {
      height: 100%;

      img {
        width: 100%;
        height: 488px - 43px;
      }
    }

    .player-pause-adv {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 400px;
      text-align: center;
      margin-left: -200px;
      height: 300px;
      margin-top: -150px;
    }
  }

  .bdv-video-player-contianer {
    position: relative;
    line-height: 0;
    width: 100%;
    padding: 0;
    margin: 0;
    .video-player {
      display: inline-block;
      z-index: 10;
      width: 100%;
      height: 100%;
    }

    .adv-timer {
      background: rgba(8, 8, 8, 0.44);
      padding: 5px;
      color: #fff;
      font-family: Microsoft Yahei;
      line-height: 1.2;
      position: absolute;
      right: 0;
      top: 0;
      padding-right: 35px;
      font-size: 16px;
    }

    .ad-link-layer {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 200;
      cursor: pointer;
    }

    .player-poster {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      overflow: hidden;
    }

    .play-loading {
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -40px 0 0 -40px;
      width: 80px;
      height: 80px;
      opacity: 0.5;
      background: url(http://video-static.xdcdn.xiaodutv.com/browse_static/v3/common/widget/global/player/loading_68b866d8.png)
        0 center no-repeat;
      color: red;
      font-size: 20px;
      vertical-align: middle;
      animation: spin 2s linear infinite;
      background-size: contain;
    }
    .play-status-pause {
      .play-icon {
        background-position: 0 center;
        display: block;
      }
    }
    .player-control {
      position: absolute;
      background-image: url('data:image/gif; base64,AAAA');
      display: block;
      z-index: 100;
      width: 100%;
      height: 100%;
      top: 0;

      .play-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -40px 0 0 -40px;
        width: 80px;
        height: 80px;
        color: red;
        font-size: 20px;
        vertical-align: middle;
        background-size: auto 80px;
        background: url(http://video-static.xdcdn.xiaodutv.com/browse_static/v3/common/widget/global/player/play_068e8f3f.png)
          right center no-repeat;
      }
      .control-bar {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 43px;
        color: #eee;
        width: 100%;
        background: #000;

        .bg {
          background: #ccc;
          opacity: 0;
          width: 100%;
          height: 100%;
        }

        .play-icon {
          width: 30px;
          height: 30px;
          background-size: auto 30px;
          left: 50px;
          bottom: 8px;
          top: inherit;
          cursor: pointer;
        }

        .time {
          position: absolute;
          left: 55px;
          bottom: 3px;
          font-size: 12px;
          font-family: arial;
          line-height: 40px;
        }

        .progress-bar {
          height: 25px;
          position: absolute;
          left: 10px;
          right: 10px;
          top: 0;
          cursor: pointer;
        }

        .volumn-bar {
          right: 45px;
          top: 26px;
          left: initial;
          width: 60px;
        }

        .adv-mute {
          right: 110px;
          bottom: 8px;
          top: inherit;
          display: block;
          position: absolute;
          width: 36px;
          height: 28px;
          cursor: pointer;
          z-index: 300;
          background: url(http://list.xiaodutv.com/pc_static/icons/icon_volume.png)
            center center no-repeat;
        }

        .zoom-in {
          position: absolute;
          display: block;
          width: 39px;
          height: 36px;
          right: 4px;
          bottom: 5px;
          background-size: 26px 25px;
          cursor: pointer;
          background: url(http://video-static.xdcdn.xiaodutv.com/browse_static/v3/common/widget/global/player/zoom_940e3c34.png)
            center center no-repeat;
        }
      }
    }
  }

  .player-tips-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 500;
    background: rgba(0, 0, 0, 0.75);
  }

  .player-tips-wrap {
    position: absolute;
    left: 50%;
    bottom: 186px;
    width: 270px;
    height: 200px;
    margin-left: -135px;
    text-align: center;
    font-size: 16px;
    color: #fff;
  }

  .player-tips-image {
    margin: 0 auto;
    width: 98px;
    height: 112px;
    background: url(http://video-static.xdcdn.xiaodutv.com/browse_static/v3/common/widget/global/player/autoplay_502947be.png)
      center no-repeat;
  }

  .player-tips-title {
    margin: 14px auto;
    line-height: 16px;
  }

  .player-tips-btn {
    margin: 0 auto;
    width: 100px;
    line-height: 40px;
    border-radius: 4px;
    background-color: #3287ff;
  }
}

.side {
  position: relative;
  margin-left: 900px;
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

.video-list-wrap .current .intro {
  color: $primary-color;
}

.video-list-wrap .current .crop {
  border-color: $primary-color;
}

.video-list-wrap {
  .video-item {
    overflow: hidden;
    padding-top: 10px;
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

.scroll-bar {
  position: absolute;
  right: 0;
  top: 0;
  width: 7px;
  background: #2d2d2d;
  height: 100%;
}
</style>
