export default function(type) {
  const icons = [
    {
      template: () => {
        let input = document.createElement("input");
        input.classList.add("block");
        let shell = document.createElement("div");
        shell.appendChild(input);
        return shell;
      },
      title: "文字"
    },
    {
      template: () => {
        let div = document.createElement("div");
        div.style.width = "50px";
        div.style.height = "50px";
        div.style.borderWidth = "1px";
        div.style.borderStyle = "solid";
        div.style.borderColor = "#000";
        div.style.display = "inline-block";
        let shell = document.createElement("div");
        shell.appendChild(div);
        return shell;
      },
      title: "矩形"
    },
    {
      template: () => {
        let div = document.createElement("div");
        div.style.width = "50px";
        div.style.height = "50px";
        div.style.borderWidth = "1px";
        div.style.borderStyle = "solid";
        div.style.borderColor = "#000";
        div.style.display = "inline-block";
        div.style.borderRadius = "50%";
        let shell = document.createElement("div");
        shell.appendChild(div);
        return shell;
      },
      title: "圆形"
    },
    {
      template: () => {
        let hr = document.createElement("hr");
        let shell = document.createElement("div");
        shell.appendChild(hr);
        return shell;
      },
      title: "水平线"
    },
    {
      template: "icon-chuizhixian",
      title: "垂直线"
    },
    {
      template: () => {
        let btn = document.createElement("button");
        btn.innerText = "这是一个按钮";
        btn.classList.add("block");
        let shell = document.createElement("div");
        shell.appendChild(btn);
        return shell;
      },
      title: "按钮"
    },
    {
      template: () => {
        let img = document.createElement("img");
        img.src = require("../assets/lock.png");
        img.alt = "";
        img.classList.add("block");
        let shell = document.createElement("div");
        shell.appendChild(img);
        return shell;
      },
      title: "图片"
    },
    {
      template: () => {
        let link = document.createElement("a");
        link.href = "#";
        link.innerText = "这是一个链接";
        let shell = document.createElement("div");
        shell.appendChild(link);
        return shell;
      },
      title: "链接"
    },
    {
      template: () => {
        let input = document.createElement("input");
        input.type = "file";
        input.classList.add("block");
        let shell = document.createElement("div");
        shell.appendChild(input);
        return shell;
      },
      title: "选择文件"
    },
    {
      template: () => {
        let input = document.createElement("input");
        input.type = "text";
        input.classList.add("block");
        let shell = document.createElement("div");
        shell.appendChild(input);
        return shell;
      },
      title: "单行输入"
    },
    {
      template: () => {
        let textarea = document.createElement("textarea");
        textarea.classList.add("block");
        let shell = document.createElement("div");
        shell.appendChild(textarea);
        return shell;
      },
      title: "多行输入"
    },
    {
      template: "icon-xialakuang",
      title: "下拉框"
    },
    {
      template: () => {
        let radio = document.createElement("input");
        radio.type = "radio";
        let shell = document.createElement("div");
        shell.appendChild(radio);
        return shell;
      },
      title: "单选按钮"
    },
    {
      template: () => {
        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        let shell = document.createElement("div");
        shell.appendChild(checkBox);
        return shell;
      },
      title: "复选框"
    },
    {
      template: () => {
        let tab = document.createElement("table");
        let tr = document.createElement("tr");
        for (let i = 0; i < 4; i++) {
          let th = document.createElement("th");
          th.innerText = `标题${i}`;
          tr.appendChild(th);
        }
        tab.appendChild(tr);
        let tr2 = document.createElement("tr");
        for (let i = 0; i < 4; i++) {
          let td = document.createElement("td");
          td.innerText = `内容${i}`;
          tr2.appendChild(td);
        }
        tab.appendChild(tr2);
        tab.border = 1;
        let shell = document.createElement("div");
        shell.appendChild(tab);
        return shell;
      },
      title: "表格"
    },
    {
      template: "icon-dilan1",
      title: "标题栏"
    },
    {
      template: "icon-dilan",
      title: "底栏"
    },
    {
      template: "icon-kaiguanguan-open",
      title: "开关"
    },
    {
      template: "icon-carousel",
      title: "轮播图"
    }
  ];
  let html = "";
  icons.map(ele => {
    if (ele.title == type) {
      html = ele.template();
    }
  });
  return html;
}
