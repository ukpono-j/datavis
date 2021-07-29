const display = async () => {
  let data = await fetch("./association_analysis_frequent_rules.json");
  data = await data.json();
  data = data.data;

  let support = data.map((item, index) => item[4]);
  let confidence = data.map((item, index) => item[5]);
  let lift = data.map((item, index) => item[6]);

  let table = document.getElementById("table_body");

  for (let i in support) {
    let row = `<tr>
          <td>
            ${support[i]}
          </td>
          <td>
            ${confidence[i]}
          </td>
          <td>
          ${lift[i]}
        </td>
        </tr>`;

    table.innerHTML += row;
  }
  console.log(table);
};

display();
