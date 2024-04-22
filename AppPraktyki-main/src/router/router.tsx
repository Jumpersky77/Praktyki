import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  useNavigate,
} from "react-router-dom";
import AppShell from "../components/AppShell";
import Subjects from "../pages/Subjects";
import Teachers from "../pages/Teachers";
import AddAnswer from "../pages/AddAnswer";
import Answers from "../pages/Answers";
import Register from "../pages/Register";
import { createContext, useContext } from "react";
import Details from "../pages/Details";
import Login from "../pages/Login";

const PAGES_URL = "/pages";

export interface NavigationContext {
  toTeacherPage(subject: string): void;
  toAnswersPage(subject: string, teacher: string): void;
  toAddAnswerPage(answerID: string): void;
  toDetailsPage(subject: string, teacher: string): void;
  getAnswerPageLink(subject: string, teacher: string): string;
}

const throwError = () => {
  throw Error("Unknown Navigation");
};

const AppNavigationContext = createContext<NavigationContext>({
  toTeacherPage: throwError,
  toAnswersPage: throwError,
  toAddAnswerPage: throwError,
  toDetailsPage: throwError,
  getAnswerPageLink: throwError,
});

export const AppNavigationProvider = AppNavigationContext.Provider;

export const createNavigationContext: () => NavigationContext = () => {
  const navigate = useNavigate();

  return {
    toTeacherPage(subject) {
      navigate(`${PAGES_URL}/teachers?subject=${subject}`);
    },
    toAnswersPage(subject: string, teacher: string) {
      navigate(this.getAnswerPageLink(subject, teacher));
    },
    toAddAnswerPage(answerID: string) {
      navigate(`${PAGES_URL}/details?answerid=${answerID}`);
    },
    toDetailsPage(subject: string, teacher: string) {
      navigate(`${PAGES_URL}/addanswer?subject=${subject}&teacher=${teacher}`);
    },
    getAnswerPageLink(subject, teacher) {
      return `${PAGES_URL}/answers?subject=${subject}&teacher=${teacher}`;
    },
  };
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to={"/pages/subjects"} />} />
      <Route path="/auth">
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="/pages" element={<AppShell />}>
        <Route path="subjects" element={<Subjects />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="answers" element={<Answers />} />
        <Route path="details" element={<Details />} />
        <Route path="addanswer" element={<AddAnswer />} />
      </Route>
    </>
  )
);

export const useAppNavigation = () => {
  return useContext(AppNavigationContext);
};
