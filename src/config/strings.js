import {Dimensions} from "react-native";
import * as IOSUtils from "../utils/IOSUtils";

export const LOADING = "加载中...";
export const NO_MORE_DATA = "我是有底线的 o(╥﹏╥)o";
export const PULL_TO_REFRESH = "下拉刷新...";
export const RELEASE_TO_REFRESH = "释放刷新...";
export const REFRESHING = "正在刷新...";
export const LOAD_FAILED = "加载失败 o(╥﹏╥)o";
export const NO_DATA = "暂无数据 o(╥﹏╥)o";
export const CLICK4RETRY = "点击重试";
export const PAGE_COUNT = 20;
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const iosPaddingTop = IOSUtils.isiPhoneX() ? 34 : 20;
