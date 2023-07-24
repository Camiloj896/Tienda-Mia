import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { jsPDF } from "jspdf";

import Button from 'react-bootstrap/Button';
import View from '../Orders/View';
import { getOrder } from '../../services/orders';

const Reports = () => {

  const [state, setState] = useState([]);

  let { type } = useParams();

  const handleGenerateReport = () => {
    const pdf = new jsPDF('div', 'pt', 'letter');
    const pdfjs = document.getElementById('report-html');

    //Convert HTML to PDF in JavaScript
    pdf.html(pdfjs, {
			callback: function (doc) {
        doc.save('report');
			}
		});
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getOrder();
      const auxData = data.filter(obj => {
        if (type === 'Approve' && obj.status.name === type) {
          return obj;
        } else if (type === 'Traveling') {
          const createDate = moment(obj.createDate);
          const shippingPromise = moment(obj.shippingPromise);
          const days = createDate.diff(shippingPromise, 'days');

          if (obj.status.name === type && days <= 2 ) {
            return obj;
          }
        }
      })
      setState(auxData);
    }
    fetchData();
  }, []);

  console.log(state);

  return (
    <section>
      <div className="title-content">
        <h2>Report</h2>
        <Button variant="outline-danger" onClick={handleGenerateReport}>Save PDF</Button>
      </div>
      <div id="report-html">
        {state?.map(obj => (
          <div className="title-content" key={obj.id}>
            <h2>Order #{obj.id}</h2>
            <View {...obj} />
          </div>
        ))}
      </div>
    </section>
  )
};

export default Reports;