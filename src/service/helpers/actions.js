import Cookies from "js-cookie";
import { api } from "src/utils/api";
import { toast } from "react-toastify";
import { wait } from "./usefulFns";

// Log in
export const LogIn = async (values) => {
  try {
    const res = await api.post("Auth/signIn", values);
    res.status === 200 &&
      (Cookies.set("access_token", res.data.token, {
        expires: 1,
        secure: true,
      }),
      toast.success("Успешно!", { position: "bottom-right" }),
      await wait(2000),
      (window.location.href = "/"));
    return res.data;
  } catch (err) {
    console.log(err, "err");
  }
};

// ---------------------------------------------
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
export const getApplications = async ({ queryKey }) => {
  try {
    // eslint-disable-next-line no-unused-vars
    const [_, serviceType] = queryKey;
    const res = await api.get("Application/sort", {
      params: { type_of_service: serviceType },
    });

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
// getComment
export const getComment = async () => {
  try {
    const res = await api.get("PartnerComment/all");

    return res.data;
  } catch (err) {
    console.log(err, "err");
  }
};
// ----------------------------------------------------------
// DELETE
// History
export const deleteHistory = async (id) => {
  try {
    const res = await api.delete(`ShortHistory/delete/${id}`);

    res.status === 204 &&
      toast.success("Удалено", { position: "bottom-right" });
    return res;
  } catch (err) {
    console.log(err, "err");
  }
};

// Headers
export const deleteHeaders = async (id) => {
  try {
    const res = await api.delete(`HeaderImage/delete/${id}`);

    res.status === 204 &&
      toast.success("Удалено", { position: "bottom-right" });
    return res;
  } catch (err) {
    console.log(err, "err");
  }
};

// Statistics
export const deleteStatistics = async (id) => {
  try {
    const res = await api.delete(`Statistic/delete/${id}`);

    res.status === 204 &&
      toast.success("Удалено", { position: "bottom-right" });
    return res;
  } catch (err) {
    console.log(err, "err");
  }
};

// Service
export const deleteService = async (id) => {
  try {
    const res = await api.delete(`Servise/delete/${id}`);

    res.status === 204 &&
      toast.success("Удалено", { position: "bottom-right" });
    return res;
  } catch (err) {
    console.log(err, "err");
  }
};

// Team
export const deleteTeam = async (id) => {
  try {
    const res = await api.delete(`FrendlyTeam/delete/${id}`);

    res.status === 204 &&
      toast.success("Удалено", { position: "bottom-right" });
    return res;
  } catch (err) {
    console.log(err, "err");
  }
};

// Partners
export const deletePartners = async (id) => {
  try {
    const res = await api.delete(`Partner/delete/${id}`);

    res.status === 204 &&
      toast.success("Удалено", { position: "bottom-right" });
    return res;
  } catch (err) {
    console.log(err, "err");
  }
};
// Comment
export const deleteComment = async (id) => {
  try {
    const res = await api.delete(`PartnerComment/delete/${id}`);

    res.status === 204 &&
      toast.success("Удалено", { position: "bottom-right" });
    return res;
  } catch (err) {
    console.log(err, "err");
  }
};

// ------------------------------------------------

// SETTERS
// setHistory
export const addHistory = async (values) => {
  try {
    const res = await api.post("Shorthistory/create", values);
    res.status === 201 &&
      toast.success("Создано", { position: "bottom-right" });

    return res.data;
  } catch (err) {
    console.log(err, "err");
  }
};

// setHeaders
export const addHeaders = async (values) => {
  try {
    const res = await api.post("HeaderImage/create", values);
    res.status === 201 &&
      toast.success("Создано", { position: "bottom-right" });

    return res.data;
  } catch (err) {
    console.log(err, "err");
  }
};

// setService
export const addService = async (values) => {
  try {
    const res = await api.post("Servise/create", values);
    res.status === 201 &&
      toast.success("Создано", { position: "bottom-right" });

    return res.data;
  } catch (err) {
    console.log(err, "err");
  }
};

// setTeam
export const addTeam = async (values) => {
  try {
    const res = await api.post("FrendlyTeam/create", values);
    res.status === 201 &&
      toast.success("Создано", { position: "bottom-right" });

    return res.data;
  } catch (err) {
    console.log(err, "err");
  }
};

// setPartner
export const addPartners = async (values) => {
  try {
    const res = await api.post("Partner/create", values);
    res.status === 201 &&
      toast.success("Создано", { position: "bottom-right" });

    return res.data;
  } catch (err) {
    console.log(err, "err");
  }
};
// setComment
export const addComment = async (values) => {
  try {
    const res = await api.post("PartnerComment/create", values);
    res.status === 201 &&
      toast.success("Создано", { position: "bottom-right" });

    return res.data;
  } catch (err) {
    console.log(err, "err");
  }
};

// ------------------------------------------------

// UPDATERS
// updateHistory
export const updateHistory = async (id, values) => {
  try {
    const res = await api.patch(`Shorthistory/update/${id}`, values);
    res.status === 204 &&
      toast.success("Изменено", { position: "bottom-right" });

    return res;
  } catch (err) {
    console.log(err, "err");
  }
};

// updateHeaders
export const updateHeaders = async (id, values) => {
  try {
    const res = await api.patch(`HeaderImage/update/${id}`, values);
    res.status === 204 &&
      toast.success("Изменено", { position: "bottom-right" });

    return res;
  } catch (err) {
    console.log(err, "err");
  }
};

// updateStatistics
export const updateStatistics = async (id, values) => {
  try {
    const res = await api.patch(`Statistic/update/${id}`, values);
    res.status === 204 &&
      toast.success("Изменено", { position: "bottom-right" });

    return res;
  } catch (err) {
    console.log(err, "err");
  }
};

// updateService
export const updateService = async (id, values) => {
  try {
    const res = await api.patch(`Servise/update/${id}`, values);
    res.status === 204 &&
      toast.success("Изменено", { position: "bottom-right" });

    return res;
  } catch (err) {
    console.log(err, "err");
  }
};

// updateTeam
export const updateTeam = async (id, values) => {
  try {
    const res = await api.patch(`FrendlyTeam/update/${id}`, values);
    res.status === 204 &&
      toast.success("Изменено", { position: "bottom-right" });

    return res;
  } catch (err) {
    console.log(err, "err");
  }
};

// updatePartners
export const updatePartners = async (id, values) => {
  try {
    const res = await api.patch(`Partner/update/${id}`, values);
    res.status === 204 &&
      toast.success("Изменено", { position: "bottom-right" });

    return res;
  } catch (err) {
    console.log(err, "err");
  }
};

// updateComment
export const updateComment = async (id, values) => {
  try {
    const res = await api.patch(`PartnerComment/update/${id}`, values);
    res.status === 204 &&
      toast.success("Изменено", { position: "bottom-right" });

    return res;
  } catch (err) {
    console.log(err, "err");
  }
};
