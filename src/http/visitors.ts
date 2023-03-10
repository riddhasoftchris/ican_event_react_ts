import axios from "axios";
import { customHeader } from "../utils/token.utils";
import {
  deleteVisitors,
  editVisitors,
  getVisitors,
  saveVisitors,
  searchVisitors,
  singleVisitorReport,
  visitorsReport,
} from "./endpoints/endpoints";

export const httpGetVisitors = async (
  skip: string | number,
  take: string | number
) => {
  let visitors: [] = [];
  await axios
    .get(getVisitors(skip, take), { headers: customHeader() })
    .then((response) => {
      if (response && response.data && response.data.success) {
        visitors = response.data.data.visitors;
        return;
      }
    })
    .catch((err) => {
      visitors = [];
    });
  return visitors;
};

export const httpSearchVisitors = async (search: string) => {
  let visitors: [] = [];
  await axios
    .get(searchVisitors(search), { headers: customHeader() })
    .then((response) => {
      if (response && response.data && response.data.success) {
        visitors = response.data.data.visitors;
        return;
      }
    })
    .catch((err) => {
      visitors = [];
    });
  return visitors;
};

export const httpgetReport = async (skip: any, take: any) => {
  let report: never[] = [];
  await axios
    .get(visitorsReport(skip, take), { headers: customHeader() })
    .then((response) => {
      if (response && response.data && response.data.success) {
        report = response.data.data;
        return;
      }
    })
    .catch((err) => {});
  return report;
};
export const httpgetSingleReport = async () => {
  let report: never[] = [];
  await axios
    .get(singleVisitorReport, { headers: customHeader() })
    .then((response) => {
      if (response && response.data && response.data.success) {
        report = response.data.data;
        return;
      }
    })
    .catch((err) => {});
  return report;
};

export const httpSaveVisitors = (data: any) => axios.post(saveVisitors, data);
// export const httpEditVisitors = (data: any) => axios.post(editVisitors, data);
// export const httpDeleteVisitors = (data: any) => axios.delete(deleteVisitors);
