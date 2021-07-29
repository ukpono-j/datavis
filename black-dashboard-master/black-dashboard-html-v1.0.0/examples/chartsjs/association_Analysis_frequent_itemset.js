const display = async () => {
  let data = await fetch("./association_analysis_frequent_itemset.json");
  data = await data.json();
  data = data.data;

  let support = data.map((item, index) => item[0]);
  let itemset = data.map((item, index) => item[1]);
  console.log({ support, itemset });

  let table = document.getElementById("table_body");

  for (let i in support) {
    let row = `<tr>
        <td>
          ${support[i]}
        </td>
        <td>
          ${itemset[i]}
        </td>
      </tr>`;

    table.innerHTML += row
  }
  console.log(table);
};

display();
