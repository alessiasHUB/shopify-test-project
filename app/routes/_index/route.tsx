import type { LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
// import { Form, useLoaderData } from "@remix-run/react";
import { login } from "../../shopify.server";
import styles from "./styles.module.css";
import iconNoJug from "../../imgs/icon-no-jug.svg";
import iconPowClean from "../../imgs/icon-powerful-clean.svg";
import iconPowImpact from "../../imgs/icon-powerful-impact.svg";
import iconRapidDis from "../../imgs/icon-rapid-dissolve.svg";
import vidWashingMachine from "../../imgs/db.server.mp4";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);

  if (url.searchParams.get("shop")) {
    throw redirect(`/app?${url.searchParams.toString()}`);
  }

  return json({ showForm: Boolean(login) });
};

export default function App() {
  // const { showForm } = useLoaderData<typeof loader>();

  const tagline =
    "Works in cold water, hot water, on light loads, heavy loads, dirty socks, gym stuff, and just about everything else.";

  const spans = tagline.split(" ").map((word, index) => (
    <span
      key={index}
      className={styles.letter}
      style={{ "--delay": index + 1 } as React.CSSProperties}
    >
      {word}&nbsp;
    </span>
  ));

  //TODO:
  //[ ] shopify item
  //[ ] mobile styling

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.headingTop}>
          It's soap in a sheet. <br />
          And it works great.
        </h2>

        <ul className={styles.callOutContainer}>
          <li className={styles.callOut}>
            <div className={styles.callOutContent}>
              <img src={iconRapidDis} alt="" className={styles.callOutIcon} />
              <p className={styles.callOutText}>RAPID DISSOLVE</p>
            </div>
            <span className={styles.callOutLine}> ________ </span>
          </li>

          <li className={styles.callOut}>
            <span className={styles.callOutLine}> ___________ </span>
            <div className={styles.callOutContent}>
              <img src={iconPowClean} alt="" className={styles.callOutIcon} />
              <p className={styles.callOutText}>POWERFUL CLEAN</p>
            </div>
          </li>

          <li className={styles.callOut}>
            <div className={styles.callOutContent}>
              <img src={iconNoJug} alt="" className={styles.callOutIcon} />
              <p className={styles.callOutText}>
                NO SPILLS, <br />
                NO MESS, NO JUG
              </p>
            </div>
            <span className={styles.callOutLine}> ________ </span>
          </li>

          <li className={styles.callOut}>
            <span className={styles.callOutLine}> ________ </span>
            <div className={styles.callOutContent}>
              <img src={iconPowImpact} alt="" className={styles.callOutIcon} />
              <p className={styles.callOutText}>POWERFUL IMPACT</p>
            </div>
          </li>
        </ul>

        <h1 className={styles.headingMid}>It's. This. Easy</h1>

        <video
          className={styles.video}
          width="640"
          height="360"
          controls
          autoPlay
          muted
          loop
        >
          <source src={vidWashingMachine} type="video/mp4" />
          Your browser does not support video
        </video>

        <div className={styles.tagline}>{spans}</div>
      </div>

      {/* <div className={styles.index}>
        <div className={styles.content}>
          <h1 className={styles.heading}>A short heading about [your app]</h1>
          <p className={styles.text}>
            A tagline about [your app] that describes your value proposition.
          </p>
          {showForm && (
            <Form className={styles.form} method="post" action="/auth/login">
              <label className={styles.label}>
                <span>Shop domain</span>
                <input className={styles.input} type="text" name="shop" />
                <span>e.g: my-shop-domain.myshopify.com</span>
              </label>
              <button className={styles.button} type="submit">
                Log in
              </button>
            </Form>
          )}
          <ul className={styles.list}>
            <li>
              <strong>Product feature</strong>. Some detail about your feature
              and its benefit to your customer.
            </li>
            <li>
              <strong>Product feature</strong>. Some detail about your feature
              and its benefit to your customer.
            </li>
            <li>
              <strong>Product feature</strong>. Some detail about your feature
              and its benefit to your customer.
            </li>
          </ul>
        </div>
      </div> */}
    </>
  );
}
