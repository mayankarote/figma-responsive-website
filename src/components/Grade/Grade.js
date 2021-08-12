import React, { useState } from "react";
import "./Grade.css";
import { useHistory } from "react-router-dom";
import {
  ChapP2,
  GradeBigCirlce,
  GradeContainer,
  GradeContent,
  GradeItems,
  ChapP,
  ChapP3,
  Grades,
  GradeSmallCirlce5,
  GradeSmallCirlce6,
  GradeSmallCirlce7,
  Chap,
  GradeSmallCirlce8,
  GradeSmallCirlce10,
  GradeSmallCirlce9,
  GradeSmallCirlce11,
  ChapBtn,
} from "./GradeElements";
import Footer from "../Footer";

export default function Grade() {
  const [selectedGrade, setSelectedGrade] = useState();

  const history = useHistory();
  const proceed = () => {
    if (!selectedGrade) {
      alert("Please select Grade");
    } else {
      if (selectedGrade === 5 || selectedGrade === 6) {
        history.push({
          pathname: "/subject",
        });
      } else {
        alert("No data Available");
      }
    }
  };
  return (
    <GradeContainer>
      <GradeContent>
        <GradeItems>
          <GradeBigCirlce>
            <Chap>
              <ChapP>
                Select <ChapP2>Grade {selectedGrade}</ChapP2>
              </ChapP>
            </Chap>
            <Grades>
              {selectedGrade === 5 ? (
                <>
                  <GradeSmallCirlce5
                    onClick={() => setSelectedGrade(5)}
                    className="gradee__smallCircleSelected gradee__selectText"
                  >
                    <ChapP3 className="gradee__selectText">5th</ChapP3>
                  </GradeSmallCirlce5>
                </>
              ) : (
                <GradeSmallCirlce5 onClick={() => setSelectedGrade(5)}>
                  <ChapP3>5th</ChapP3>
                </GradeSmallCirlce5>
              )}
              {selectedGrade === 6 ? (
                <>
                  <GradeSmallCirlce6
                    onClick={() => setSelectedGrade(6)}
                    className="gradee__smallCircleSelected gradee__selectText"
                  >
                    <ChapP3 className="gradee__selectText">6th</ChapP3>
                  </GradeSmallCirlce6>
                </>
              ) : (
                <GradeSmallCirlce6 onClick={() => setSelectedGrade(6)}>
                  <ChapP3>6th</ChapP3>
                </GradeSmallCirlce6>
              )}
              {selectedGrade === 7 ? (
                <>
                  <GradeSmallCirlce7
                    onClick={() => setSelectedGrade(7)}
                    className="gradee__smallCircleSelected gradee__selectText"
                  >
                    <ChapP3 className="gradee__selectText">7th</ChapP3>
                  </GradeSmallCirlce7>
                </>
              ) : (
                <GradeSmallCirlce7 onClick={() => setSelectedGrade(7)}>
                  <ChapP3>7th</ChapP3>
                </GradeSmallCirlce7>
              )}
              {selectedGrade === 8 ? (
                <>
                  <GradeSmallCirlce8
                    onClick={() => setSelectedGrade(8)}
                    className="gradee__smallCircleSelected gradee__selectText"
                  >
                    <ChapP3 className="gradee__selectText">8th</ChapP3>
                  </GradeSmallCirlce8>
                </>
              ) : (
                <GradeSmallCirlce8 onClick={() => setSelectedGrade(8)}>
                  <ChapP3>8th</ChapP3>
                </GradeSmallCirlce8>
              )}
              {selectedGrade === 9 ? (
                <>
                  <GradeSmallCirlce9
                    onClick={() => setSelectedGrade(9)}
                    className="gradee__smallCircleSelected gradee__selectText"
                  >
                    <ChapP3 className="gradee__selectText">9th</ChapP3>
                  </GradeSmallCirlce9>
                </>
              ) : (
                <GradeSmallCirlce9 onClick={() => setSelectedGrade(9)}>
                  <ChapP3>9th</ChapP3>
                </GradeSmallCirlce9>
              )}
              {selectedGrade === 10 ? (
                <>
                  <GradeSmallCirlce10
                    onClick={() => setSelectedGrade(10)}
                    className="gradee__smallCircleSelected gradee__selectText"
                  >
                    <ChapP3 className="gradee__selectText">10th</ChapP3>
                  </GradeSmallCirlce10>
                </>
              ) : (
                <GradeSmallCirlce10 onClick={() => setSelectedGrade(10)}>
                  <ChapP3>10th</ChapP3>
                </GradeSmallCirlce10>
              )}
              {selectedGrade === 11 ? (
                <>
                  <GradeSmallCirlce11
                    onClick={() => setSelectedGrade(11)}
                    className="gradee__smallCircleSelected gradee__selectText"
                  >
                    <ChapP3 className="gradee__selectText">11th</ChapP3>
                  </GradeSmallCirlce11>
                </>
              ) : (
                <GradeSmallCirlce11 onClick={() => setSelectedGrade(11)}>
                  <ChapP3>11th</ChapP3>
                </GradeSmallCirlce11>
              )}
            </Grades>
          </GradeBigCirlce>
          <ChapBtn onClick={proceed}>Proceed</ChapBtn>
        </GradeItems>
      </GradeContent>
      <Footer />
    </GradeContainer>
  );
}
