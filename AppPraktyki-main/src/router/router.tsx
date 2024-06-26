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
import { Subject } from "../model/subject";
import { Teacher } from "../model/teacher";
import { fullAnswerLoader } from "../loaders/full-answer.loader";

const PAGES_URL = "/pages";

export interface NavigationContext {
  toTeacherPage(subject: Subject): void;
  toAnswersPage(subject: Subject, teacher: Teacher): void;
  toAddAnswerPage(subject: Subject, teacher: Teacher): void;
  toDetailsPage(answerID: string): void;
  getAnswerPageLink(subject: Subject, teacher: Teacher): string;
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
      navigate(`${PAGES_URL}/teachers?subject=${subject.name}`, {
        state: subject,
      });
    },
    toAnswersPage(subject, teacher) {
      navigate(this.getAnswerPageLink(subject, teacher), {
        state: { subject, teacher },
      });
    },
    toAddAnswerPage(subject, teacher) {
      navigate(
        `${PAGES_URL}/addanswer?subject=${subject.name}&teacher=${
          teacher.firstName + "" + teacher.lastName
        }`,
        {
          state: { subject, teacher },
        }
      );
    },
    toDetailsPage(id) {
      navigate(`${PAGES_URL}/answers/${id}`);
    },
    getAnswerPageLink(subject, teacher) {
      return `${PAGES_URL}/answers?subject=${subject.name}&teacher=${
        teacher.firstName + "" + teacher.lastName
      }`;
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
        <Route
          path="answers/:id"
          element={<Details />}
          loader={fullAnswerLoader}
        />
        <Route path="addanswer" element={<AddAnswer />} />
      </Route>
    </>
  )
);

export const useAppNavigation = () => {
  return useContext(AppNavigationContext);
};
