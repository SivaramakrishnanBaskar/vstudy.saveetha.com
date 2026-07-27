import {
    d as e
} from "./index-yzCs2v45.js";
const i = async (a = {}) => (await e.get("/api/lms/exam-schedule/cycles", {
        params: a
    })).data,
    m = async (a = {}) => (await e.get("/api/lms/exam-schedule/exams", {
        params: a
    })).data,
    l = async (a = {}) => (await e.get("/api/lms/exam-schedule/course-exam-groups", {
        params: a
    })).data,
    p = async ({
        academicCycleId: a,
        scope: s,
        targetId: t,
        offeringId: r
    }) => (await e.get("/api/lms/exam-schedule/course-exam-groups/offering-marksheet", {
        params: {
            academicCycleId: a,
            scope: s,
            targetId: t,
            offeringId: r
        }
    })).data,
    d = async a => (await e.post("/api/lms/exam-schedule/course-exam-groups/launch", a)).data,
    g = async a => (await e.post("/api/lms/exam-schedule/course-exam-groups/publish", a)).data,
    h = async a => (await e.get(`/api/lms/exam-schedule/${a}/config`)).data,
    x = async (a, s) => (await e.put(`/api/lms/exam-schedule/${a}/config`, {
        items: s
    })).data,
    y = async a => (await e.get(`/api/lms/exam-schedule/${a}/evaluation-sheet`)).data,
    w = async (a, s) => (await e.put(`/api/lms/exam-schedule/${a}/scores`, {
        sections: s
    })).data,
    f = async (a, {
        curriculumCourseId: s,
        componentId: t,
        studentId: r,
        score: n,
        reason: c
    } = {}) => (await e.patch(`/api/lms/exam-schedule/${a}/formative-mark`, {
        curriculumCourseId: s,
        componentId: t,
        studentId: r,
        score: n,
        reason: c
    })).data,
    v = async a => {
        const s = new FormData;
        return s.append("file", a), (await e.post("/api/lms/upload-any", s, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })).data
    },
    E = async () => (await e.get("/api/lms/exam-schedule/my-evaluations")).data,
    C = async a => (await e.get(`/api/lms/exam-schedule/my-evaluations/${a}/sheet`)).data,
    k = async () => {
        const a = await e.get("/api/lms/exam-schedule/my-evaluations/pending-count");
        return {
            count: a.data ? .count ? ? 0,
            assigned: !!a.data ? .assigned
        }
    };
export {
    h as a, y as b, p as c, l as d, f as e, m as f, k as g, d as h, E as i, C as j, w as k, i as l, g as p, x as s, v as u
};