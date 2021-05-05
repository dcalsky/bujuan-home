import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/index.css";

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/date");
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Helmet>
        <title>不卷科技</title>
      </Helmet>
      <h1>不卷科技</h1>
      <h2 style={{ color: "#1E88E5" }}>云产品的附魔台</h2>
      <p>
        联系我们:
        <a href="mailto:i@noddl.me">
          <code>i@noddl.me</code>
        </a>
        .
      </p>
      <p className="icp">
        <a href="http://www.beian.miit.gov.cn/"></a>
      </p>
    </main>
  );
}

export default Index;
