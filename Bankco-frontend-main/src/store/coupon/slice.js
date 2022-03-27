import { createSlice } from "@reduxjs/toolkit";

const couponSlice = createSlice({
  name: "coupon",
  initialState: {
    categories: [],
    couponList: [],
    homeCouponList: [],
    sms: [],
    loadingCategories: true,
    loadingCoupon: true,
  },
  reducers: {
    getCategories(state) {
      state.loadingCategories = true;
    },
    getCategoriesSuccess(state, { payload }) {
      state.loadingCategories = false;

      state.categories = payload.data.map((item) => ({
        ...item,
        label: item.name,
        value: item.name,
      }));
    },
    getCategoriesFail(state) {
      state.loadingCategories = false;
    },
    getCoupon(state) {
      state.loadingCoupon = true;
    },
    getCouponSuccess(state, { payload }) {
      state.loadingCoupon = false;
      if (payload.isHomeScreen) {
        state.homeCouponList = payload.data.data;
      } else {
        state.couponList = payload.data.data;
      }
    },
    getCouponFail(state) {
      state.loadingCoupon = false;
    },
    submitCardDetail(state, { payload }) {
      state.loadingCategories = true;
    },
    submitCardDetailSuccess(state, { payload }) {
      state.loadingCategories = false;
    },
    submitCardDetailFail(state, { payload }) {
      state.loadingCategories = false;
    },
    sendMessages(state, { payload }) {},
    sendMessagesSuccess(state, { payload }) {},
    sendMessagesFail(state, { payload }) {},
  },
});

export const {
  getCategoriesFail,
  getCategories,
  getCategoriesSuccess,
  getCoupon,
  getCouponFail,
  getCouponSuccess,
  submitCardDetail,
  submitCardDetailSuccess,
  submitCardDetailFail,
  sendMessages,
  sendMessagesSuccess,
  sendMessagesFail,
} = couponSlice.actions;

export default couponSlice.reducer;
