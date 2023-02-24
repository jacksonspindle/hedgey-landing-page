import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import twitterBadge from "../../src/twitterBadge.png";
import Marquee from "react-fast-marquee";

const Twitter = () => {
  return (
    <div className="ticker-carousel-container">
      <Marquee pauseOnHover speed={100} gradientWidth={150}>
        <div className="carousel">
          <motion.blockquote class="twitter-tweet">
            <div className="tweet-header">
              <img
                className="twitter-pfp"
                src="https://pbs.twimg.com/profile_images/1620462677700100096/Rzjv7oJI_400x400.jpg"
              ></img>
              <div className="twitter-account-container">
                <div className="twitter-account-name">
                  <p>Hedgey 🦔</p>
                  <img className="twitter-badge" src={twitterBadge}></img>
                </div>
                <div className="twitter-follow-btn-container">
                  <span>@HedgeyFinance</span>·<a>Follow</a>
                </div>
              </div>
            </div>
            <p lang="en" dir="ltr">
              A new class of
              <a href="https://twitter.com/RaidGuild?ref_src=twsrc%5Etfw">
                @RaidGuild
              </a>
              Hedgeys went out and are looking freshhhhh.<br></br>⚔️⚔️⚔️{" "}
              <a href="https://t.co/joW8IeJzvq">pic.twitter.com/joW8IeJzvq</a>
            </p>
            &mdash; Hedgey 🦔 (@hedgeyfinance)
            <a
              className="twitter-date"
              href="https://twitter.com/hedgeyfinance/status/1626263119986057216?ref_src=twsrc%5Etfw"
            >
              February 16, 2023
            </a>
          </motion.blockquote>
          <motion.blockquote class="twitter-tweet">
            <div className="tweet-header">
              <img
                className="twitter-pfp"
                src="https://pbs.twimg.com/profile_images/1620462677700100096/Rzjv7oJI_400x400.jpg"
              ></img>
              <div className="twitter-account-container">
                <div className="twitter-account-name">
                  <p>Hedgey 🦔</p>
                  <img className="twitter-badge" src={twitterBadge}></img>
                </div>
                <div className="twitter-follow-btn-container">
                  <span>@HedgeyFinance</span>·<a>Follow</a>
                </div>
              </div>
            </div>
            <p lang="en" dir="ltr">
              A new class of
              <a href="https://twitter.com/RaidGuild?ref_src=twsrc%5Etfw">
                @RaidGuild
              </a>
              Hedgeys went out and are looking freshhhhh.<br></br>⚔️⚔️⚔️{" "}
              <a href="https://t.co/joW8IeJzvq">pic.twitter.com/joW8IeJzvq</a>
            </p>
            &mdash; Hedgey 🦔 (@hedgeyfinance)
            <a
              className="twitter-date"
              href="https://twitter.com/hedgeyfinance/status/1626263119986057216?ref_src=twsrc%5Etfw"
            >
              February 16, 2023
            </a>
          </motion.blockquote>
          <motion.blockquote class="twitter-tweet">
            <div className="tweet-header">
              <img
                className="twitter-pfp"
                src="https://pbs.twimg.com/profile_images/1620462677700100096/Rzjv7oJI_400x400.jpg"
              ></img>
              <div className="twitter-account-container">
                <div className="twitter-account-name">
                  <p>Hedgey 🦔</p>
                  <img className="twitter-badge" src={twitterBadge}></img>
                </div>
                <div className="twitter-follow-btn-container">
                  <span>@HedgeyFinance</span>·<a>Follow</a>
                </div>
              </div>
            </div>
            <p lang="en" dir="ltr">
              A new class of
              <a href="https://twitter.com/RaidGuild?ref_src=twsrc%5Etfw">
                @RaidGuild
              </a>
              Hedgeys went out and are looking freshhhhh.<br></br>⚔️⚔️⚔️{" "}
              <a href="https://t.co/joW8IeJzvq">pic.twitter.com/joW8IeJzvq</a>
            </p>
            &mdash; Hedgey 🦔 (@hedgeyfinance)
            <a
              className="twitter-date"
              href="https://twitter.com/hedgeyfinance/status/1626263119986057216?ref_src=twsrc%5Etfw"
            >
              February 16, 2023
            </a>
          </motion.blockquote>
          <motion.blockquote class="twitter-tweet">
            <div className="tweet-header">
              <img
                className="twitter-pfp"
                src="https://pbs.twimg.com/profile_images/1620462677700100096/Rzjv7oJI_400x400.jpg"
              ></img>
              <div className="twitter-account-container">
                <div className="twitter-account-name">
                  <p>Hedgey 🦔</p>
                  <img className="twitter-badge" src={twitterBadge}></img>
                </div>
                <div className="twitter-follow-btn-container">
                  <span>@HedgeyFinance</span>·<a>Follow</a>
                </div>
              </div>
            </div>
            <p lang="en" dir="ltr">
              A new class of
              <a href="https://twitter.com/RaidGuild?ref_src=twsrc%5Etfw">
                @RaidGuild
              </a>
              Hedgeys went out and are looking freshhhhh.<br></br>⚔️⚔️⚔️{" "}
              <a href="https://t.co/joW8IeJzvq">pic.twitter.com/joW8IeJzvq</a>
            </p>
            &mdash; Hedgey 🦔 (@hedgeyfinance)
            <a
              className="twitter-date"
              href="https://twitter.com/hedgeyfinance/status/1626263119986057216?ref_src=twsrc%5Etfw"
            >
              February 16, 2023
            </a>
          </motion.blockquote>
        </div>
      </Marquee>
    </div>
  );
};

export default Twitter;