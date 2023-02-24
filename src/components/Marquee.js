import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import twitterHeart from "../../src/twitterHeart.png";
import twitterReply from "../../src/twitterReply.png";
import twitterShare from "../../src/twitterShare.png";
import defaultProfile from "../../src/defaultProfile.png";
import twitterLogo from "../../src/twitterLogo.png";

const Twitter = () => {
  return (
    <div className="ticker-carousel-container">
      <h1>What our users say:</h1>
      <Marquee pauseOnHover speed={100} gradientWidth={150}>
        <div className="carousel">
          <motion.blockquote class="twitter-tweet">
            <div className="tweet-container">
              <div className="tweet-author-container">
                <div className="tweet-author">
                  <img
                    alt="twitter profile"
                    className="twitter-profile-image"
                    src={defaultProfile}
                  ></img>
                  <div>
                    <p>BattleFly DAO</p>
                    <span>@BattleFlyGame</span>
                    <span
                      style={{
                        color: "lightblue",
                        fontWeight: 900,
                        marginLeft: "5px",
                        fontSize: 14,
                      }}
                    >
                      · Follow
                    </span>
                  </div>
                </div>
                <div>
                  <img
                    alt="twitter badge"
                    className="twitter-badge"
                    src={twitterLogo}
                  ></img>
                </div>
              </div>
              <div className="tweet-content">
                Shoutout to the team at @utopialabs_ for assisting us with some
                gFLY airdrops during launch. <br></br>They are incredibly
                responsive and their product is our go-to for recurring
                payments.
              </div>
              <div className="twitter-date">
                <p>1:28 PM · Nov 25, 2022</p>
                <p>i</p>
              </div>
              <div className="twitter-likes-container">
                <div>
                  <img alt="twitter-like" src={twitterHeart}></img>
                  <span>34</span>
                </div>
                <div>
                  <img alt="twitter-reply" src={twitterReply}></img>
                  <span>Reply</span>
                </div>
                <div>
                  <img alt="twitter-share" src={twitterShare}></img>
                  <span>Copy Link</span>
                </div>
              </div>
            </div>
          </motion.blockquote>
          <motion.blockquote class="twitter-tweet">
            <div className="tweet-container">
              <div className="tweet-author-container">
                <div className="tweet-author">
                  <img
                    alt="twitter profile"
                    className="twitter-profile-image"
                    src={defaultProfile}
                  ></img>
                  <div>
                    <p>BattleFly DAO</p>
                    <span>@BattleFlyGame</span>
                    <span
                      style={{
                        color: "lightblue",
                        fontWeight: 900,
                        marginLeft: "5px",
                        fontSize: 14,
                      }}
                    >
                      · Follow
                    </span>
                  </div>
                </div>
                <div>
                  <img
                    alt="twitter badge"
                    className="twitter-badge"
                    src={twitterLogo}
                  ></img>
                </div>
              </div>
              <div className="tweet-content">
                Shoutout to the team at @utopialabs_ for assisting us with some
                gFLY airdrops during launch. <br></br>They are incredibly
                responsive and their product is our go-to for recurring
                payments.
              </div>
              <div className="twitter-date">
                <p>1:28 PM · Nov 25, 2022</p>
                <p>i</p>
              </div>
              <div className="twitter-likes-container">
                <div>
                  <img alt="twitter-like" src={twitterHeart}></img>
                  <span>34</span>
                </div>
                <div>
                  <img alt="twitter-reply" src={twitterReply}></img>
                  <span>Reply</span>
                </div>
                <div>
                  <img alt="twitter-share" src={twitterShare}></img>
                  <span>Copy Link</span>
                </div>
              </div>
            </div>
          </motion.blockquote>
          <motion.blockquote class="twitter-tweet">
            {" "}
            <div className="tweet-container">
              <div className="tweet-author-container">
                <div className="tweet-author">
                  <img
                    alt="twitter profile"
                    className="twitter-profile-image"
                    src={defaultProfile}
                  ></img>
                  <div>
                    <p>BattleFly DAO</p>
                    <span>@BattleFlyGame</span>
                    <span
                      style={{
                        color: "lightblue",
                        fontWeight: 900,
                        marginLeft: "5px",
                        fontSize: 14,
                      }}
                    >
                      · Follow
                    </span>
                  </div>
                </div>
                <div>
                  <img
                    alt="twitter badge"
                    className="twitter-badge"
                    src={twitterLogo}
                  ></img>
                </div>
              </div>
              <div className="tweet-content">
                Shoutout to the team at @utopialabs_ for assisting us with some
                gFLY airdrops during launch. <br></br>They are incredibly
                responsive and their product is our go-to for recurring
                payments.
              </div>
              <div className="twitter-date">
                <p>1:28 PM · Nov 25, 2022</p>
                <p>i</p>
              </div>
              <div className="twitter-likes-container">
                <div>
                  <img alt="twitter-like" src={twitterHeart}></img>
                  <span>34</span>
                </div>
                <div>
                  <img alt="twitter-reply" src={twitterReply}></img>
                  <span>Reply</span>
                </div>
                <div>
                  <img alt="twitter-share" src={twitterShare}></img>
                  <span>Copy Link</span>
                </div>
              </div>
            </div>
          </motion.blockquote>
          <motion.blockquote class="twitter-tweet">
            {" "}
            <div className="tweet-container">
              <div className="tweet-author-container">
                <div className="tweet-author">
                  <img
                    alt="twitter profile"
                    className="twitter-profile-image"
                    src={defaultProfile}
                  ></img>
                  <div>
                    <p>BattleFly DAO</p>
                    <span>@BattleFlyGame</span>
                    <span
                      style={{
                        color: "lightblue",
                        fontWeight: 900,
                        marginLeft: "5px",
                        fontSize: 14,
                      }}
                    >
                      · Follow
                    </span>
                  </div>
                </div>
                <div>
                  <img
                    alt="twitter badge"
                    className="twitter-badge"
                    src={twitterLogo}
                  ></img>
                </div>
              </div>
              <div className="tweet-content">
                Shoutout to the team at @utopialabs_ for assisting us with some
                gFLY airdrops during launch. <br></br>They are incredibly
                responsive and their product is our go-to for recurring
                payments.
              </div>
              <div className="twitter-date">
                <p>1:28 PM · Nov 25, 2022</p>
                <p>i</p>
              </div>
              <div className="twitter-likes-container">
                <div>
                  <img alt="twitter-like" src={twitterHeart}></img>
                  <span>34</span>
                </div>
                <div>
                  <img alt="twitter-reply" src={twitterReply}></img>
                  <span>Reply</span>
                </div>
                <div>
                  <img alt="twitter-share" src={twitterShare}></img>
                  <span>Copy Link</span>
                </div>
              </div>
            </div>
          </motion.blockquote>
        </div>
      </Marquee>
    </div>
  );
};

export default Twitter;
