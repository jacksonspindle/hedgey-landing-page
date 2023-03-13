import React from "react";

const ProductPage = () => {
  return (
    <div>
      <div>
        <span>Token Vesting</span>
        <h1>Set up and Share custome vesting schedules in minutes</h1>
        <p>
          Manage your v esting schedules via a simple UI, keep vesting tokens
          available in your wallet, and let recipients stream their vested
          tokens to DeFi as they receive them.
        </p>
        <div>
          <button>Start Vesting</button>
          <button>Book Demo</button>
        </div>
        <div>
          <img alt="placement"></img>
        </div>
      </div>
      <div>
        <h1>Key benefits</h1>
        <div>
          <div>
            <img alt="placement"></img>
            <h2>Simple</h2>
            <p>
              Set up your vesting schedule in as little as 3-clicks, without
              requiring any programming knowledge. Keep track of your token
              vesting in real-time through our beautiful dashboard, and easily
              share access to the recipient view via a link.
            </p>
          </div>
          <div>
            <img alt="placement"></img>
            <h2>Liquid</h2>
            <p>
              Tokens are available in the sender’s wallet before being vested,
              not locked in a contract. You can generate yield in DeFi or use
              them until the very moment when they are vested and sent to the
              recipient. Receivers can spend or invest tokens as they receive
              them, without the need to claim.
            </p>
          </div>
          <div>
            <img alt="placement"></img>
            <h2>Composable</h2>
            <p>
              With Superfluid vesting, you can make the most of web3 by
              automatically transferring vested tokens to DeFi products for
              liquidity provision, staking, or yield farming. They’ll keep
              flowing into DeFi automatically as they are vested over time.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1>See what others have to say</h1>
        <div>
          <p>
            Superfluid enables us to manage vesting schedules of Stake DAO’s
            tokens for over 80+ contributors. With liquid tokens available in
            our treasury until they are transfered to each recipient, we can
            generate yield in DeFi. Streams are composable, allowing for
            automatic transfer of vested tokens to DeFi apps for recipients too.
            I would recommend Superfluid vesting to any company looking for a
            seamless and efficient way to manage their vesting schedules.
          </p>
          <div>
            <p>Julien Bouteloup</p>
            <span>Founder, StakeDAO</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
