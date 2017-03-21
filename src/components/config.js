let Table = require('uxcore-table');
let {Constants} = Table;
export default {
  title:{
    jsxid:"jsxid",
    city:"city",
    name:"name",
    email:"email",
    action1:"操作1"
  },
  width:{
    jsxid:80,
    city:200,
    name:200,
    email:200,
    action1:100
  },
  type:{
    city:"select",
    name:"radio",
    email:"text",
    action1:"action"
  },
  actions:{
    city:{
      renderChildren:() => {
          return [{id: 'bj', name: '北京'},{id: 'hz', name: '杭州'}].map((item) => {
              return <Option key={item.id}>{item.name}</Option>
          });
      }
    },
    name:{
      renderChildren: () => {
          return [{id: 'xiaoli', name: '小李'}, {id: 'xiaowang', name: '小王'}].map((item) => {
              return <RadioItem key={item.id} text={item.name} value={item.id} />
          });
      }
    },
    action1:{
      actions: [
          {
              title: '编辑',
              callback: (rowData) => {
                  me.refs.grid.editRow(rowData);
              },
              mode: Constants.MODE.VIEW
          },
          {
              title: '保存',
              callback: (rowData) => {
                if(!Validator.isEmail(rowData.email)){
                      alert("格式不对");
                      return;
                }
                  me.refs.grid.saveRow(rowData);
              },
              mode: Constants.MODE.EDIT
          },
          {
              title: '删除',
              callback: (rowData) => {
                  me.refs.grid.delRow(rowData);
              },
              mode: Constants.MODE.VIEW
          },
          {
              title: '重置',
              callback: (rowData) => {
                  me.refs.grid.resetRow(rowData);
              },
              mode: Constants.MODE.EDIT
          }
      ]
    }
  }
}
