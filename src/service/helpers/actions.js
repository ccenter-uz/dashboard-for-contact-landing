import { api } from "src/utils/api";

// GETTERS

// getHistory
export const getHistory = async () => {
  try {
    const res = await api.get("ShortHistory/all");

    return res.data;
  } catch (err) {
    console.log(err, "err");
  }
};

// getHeaders
export const getHeaders = async () => {
  try {
    const res = await api.get("HeaderImage/all");

    return res.data;
  } catch (err) {
    console.log(err, "err");
  }
};

// getStatistics
export const getStatistics = async () => {
  try {
    const res = await api.get("Statistic/all");

    return res.data;
  } catch (err) {
    console.log(err, "err");
  }
};

// getApplications
export const getApplications = async () => {
  try {
    const res = await api.get("Application/all");

    return res.data;
  } catch (err) {
    console.log(err, "err");
  }
};

// getService
export const getService = async () => {
  try {
    const res = await api.get("Servise/all");

    return res.data;
  } catch (err) {
    console.log(err, "err");
  }
};

// getTeam
export const getTeam = async () => {
  try {
    const res = await api.get("FrendlyTeam/all");

    return res.data;
  } catch (err) {
    console.log(err, "err");
  }
};

// getPartners
export const getPartners = async () => {
  try {
    const res = await api.get("Partner/all");

    return res.data;
  } catch (err) {
    console.log(err, "err");
  }
};

// DELETE

// History
export const deleteHistory = async (id) => {
  try {
    const res = await api.delete(`ShortHistory/delete/${id}`);

    return res;
  } catch (err) {
    console.log(err, "err");
  }
};
