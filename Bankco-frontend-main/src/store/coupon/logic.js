import { createLogic } from "redux-logic";
import {
  getCategories,
  getCategoriesFail,
  getCategoriesSuccess,
  getCoupon,
  getCouponFail,
  getCouponSuccess,
  sendMessages,
  sendMessagesFail,
  sendMessagesSuccess,
  submitCardDetail,
  submitCardDetailFail,
  submitCardDetailSuccess,
} from "./slice";
import get from "lodash/get";
import SmsAndroid from "react-native-get-sms-android";

const getCategoriesLogic = createLogic({
  type: getCategories.type,
  latest: true,

  async process({ action, baseAxios }, dispatch, done) {
    try {
      const res = await baseAxios.get("bank-and-offer/banks");

      dispatch(getCategoriesSuccess(res.data));
    } catch (err) {
      dispatch(
        getCategoriesFail(get(err, "response.data.error.message", err.message))
      );
    }
    done();
  },
});

const getCouponLogic = createLogic({
  type: getCoupon.type,
  latest: true,

  async process({ action, baseAxios }, dispatch, done) {
    try {
      const { bankName, limit, isHomeScreen } = action.payload;

      const res = await baseAxios.get("bank-and-offer/offers", {
        params: { bankName, limit },
      });

      dispatch(getCouponSuccess({ data: res.data, isHomeScreen }));
    } catch (err) {
      dispatch(
        getCouponFail(get(err, "response.data.error.message", err.message))
      );
    }
    done();
  },
});

const submitCardDetailLogic = createLogic({
  type: submitCardDetail.type,
  latest: true,

  async process({ action, baseAxios }, dispatch, done) {
    try {
      const { bankName, cardType } = action.payload;

      const res = await baseAxios.get("bank-and-offer/offers", {
        params: { bankName, cardType: encodeURIComponent(cardType) },
      });

      dispatch(submitCardDetailSuccess(res.data));
    } catch (err) {
      dispatch(
        submitCardDetailFail(
          get(err, "response.data.error.message", err.message)
        )
      );
    }
    done();
  },
});

const sendMessagesLogic = createLogic({
  type: sendMessages.type,
  latest: true,

  async process({ action, mlAxios }, dispatch, done) {
    try {
      let messages = [];

      const getMessages = (read, indexFrom, maxCount) => {
        /* List SMS messages matching the filter */
        var filter = {
          box: "inbox",
          read,
          indexFrom,
          maxCount,
        };

        SmsAndroid.list(
          JSON.stringify(filter),
          (fail) => {
            console.log("SMS read Failed with this error: " + fail);
          },
          (count, smsList) => {
            console.log("count: ", count);
            const arr = JSON.parse(smsList);
            const temp = arr.map((item) => item.body);
            const temp1 = messages.concat(temp);
            messages = temp1;
          }
        );
      };

      getMessages(0, 0, 50);
      getMessages(1, 0, 50);

      console.log({ messages });

      const res = await mlAxios.post("/translation", {
        messages,
      });

      console.log("submitCardDetail: ", res.data);
      dispatch(sendMessagesSuccess(res.data));
    } catch (err) {
      console.log("error: ", { ...err });
      dispatch(
        sendMessagesFail(get(err, "response.data.error.message", err.message))
      );
    }
    done();
  },
});

export default [
  getCategoriesLogic,
  getCouponLogic,
  submitCardDetailLogic,
  sendMessagesLogic,
];
