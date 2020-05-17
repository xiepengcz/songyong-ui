// 统一导出
// 导入颜色选择器组件
import Button from './button'
import Icon from './icon'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import Dialog from './dialog'
import Tabs from './tabs'
import TabsItem from './tabs-item'
import TabsBody from './tabs-body'
import TabsHeader from './tabs-header'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
import Switch from './switch'
import Radio from './radio'
import RadioGroup from './radio-group'
import Checkbox from './checkbox'
import CheckboxGroup from './checkbox-group'
import Form from './form'
import FormItem from './form-item'

import './fonts/font.scss'

// 存储组件列表
const components = [
  Button,
  Icon,
  Input,
  Row,
  Col,
  Layout,
  Header,
  Sider,
  Content,
  Footer,
  Toast,
  Dialog,
  Tabs,
  TabsItem,
  TabsBody,
  TabsHeader,
  TabsPane,
  Popover,
  Collapse,
  CollapseItem,
  Switch,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Form,
  FormItem
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 导出的对象必须具有 install，才能被 Vue.use() 方法安装
export default {
  install
}
