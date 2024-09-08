"use client";
import { getStudents } from "@/apiCalls/allApiCalls";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";
import toast, { toastConfig } from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";
toastConfig({ theme: "dark" });

export default function Paginate(props: any) {
  const [state, setState] = useState(1);
  const { set, input, length } = props;

  useEffect(() => {
    (async () => {
      if (length.length > 0) {
        set([{ loading: true }]);
        const res = await getStudents(input, state);
        if (res.message == "Rate limit exceeded") {
          toast(
            "Daily limit exceeded! Don't worry, you can try again tomorrow!"
          );
        }
        set(res?.user);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    })();
  }, [state]);

  useEffect(() => {
    setState(1);
  }, [input]);

  if (length?.length > 0) {
    return (
      <Pagination className="my-10 mr-18">
        <PaginationContent>
          <PaginationItem className="cursor-pointer">
            <PaginationLink
              style={{
                backgroundColor: `${state == 1 ? "rgba(255, 0, 0, 0.5)" : ""}`,
              }}
              className={`cursor-pointer`}
              isActive={state == 1}
              onClick={() => setState(1)}
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              style={{
                backgroundColor: `${state == 2 ? "rgba(255, 0, 0, 0.5)" : ""}`,
              }}
              className="cursor-pointer"
              onClick={() => setState(2)}
              isActive={state == 2}
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              style={{
                backgroundColor: `${state == 3 ? "rgba(255, 0, 0, 0.5)" : ""}`,
              }}
              className="cursor-pointer"
              isActive={state == 3}
              onClick={() => setState(3)}
            >
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              style={{
                backgroundColor: `${state == 4 ? "rgba(255, 0, 0, 0.5)" : ""}`,
              }}
              className="cursor-pointer"
              isActive={state == 4}
              onClick={() => setState(4)}
            >
              4
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              style={{
                backgroundColor: `${state == 5 ? "rgba(255, 0, 0, 0.5)" : ""}`,
              }}
              className="cursor-pointer"
              isActive={state == 5}
              onClick={() => setState(5)}
            >
              5
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  } else {
    <></>;
  }
}
