import React, { useRef, useState, useEffect } from "react";
import { ReactReader, ReactReaderStyle } from "react-reader";
import Ebook from "../assets/epub/blyton-secret-of-moon-castle.epub";
import HighlightList from "../components/highlightList/HighlightList";
import NavReading from "../components/navReadingBook/NavReading";
import TopicsList from "../components/topicsList/topicsList";

const loc = null;

const ownStyles = {
  ...ReactReaderStyle,
  arrow: {
    ...ReactReaderStyle.arrow,
    color: "#8ba977",
  },
};

export default function Reading() {
  const renditionRef = useRef(null);
  const tocRef = useRef(null);
  //
  const [selections, setSelections] = useState([]);
  const [isHighlightListOpen, setIsHighlightListOpen] = useState(false);
  const [isTopicsListOpen, setIsTopicsListOpen] = useState(false);
  const [selectionRange, setSelectionRange] = useState(false);
  const [location, setLocation] = useState(loc);
  const [page, setPage] = useState("");
  //
  const locationChanged = (epubcifi) => {
    setLocation(epubcifi);
    if (renditionRef.current && tocRef.current) {
      const { displayed, href } = renditionRef.current.location.start;
      const chapter = tocRef.current.find((item) => item.href === href);
      setPage(
        `Page ${displayed.page} of ${displayed.total} in chapter ${
          chapter ? chapter.label : "n/a"
        }`
      );
    }
  };

  function setRenderSelection(cfiRange, contents, color) {
    setSelections(
      selections.concat({
        text: renditionRef.current.getRange(cfiRange).toString(),
        cfiRange,
      })
    );
    renditionRef.current.annotations.highlight(
      cfiRange,
      {},
      () => {}, // callback
      "epub-highlight",
      {
        fill: color,
      }
    );
    contents.window.getSelection().removeAllRanges();
  }

  const handleSelection = (range, contents) => {
    setSelectionRange(range);
    let color = prompt("Please enter your color", "yellow");
    if (color != null) {
      setRenderSelection(range, contents, color);
    }
  };

  useEffect(() => {
    let list = document.querySelectorAll(".epub-highlight");
    list.forEach((node) => {
      node.addEventListener("click", function (e) {
        console.log(e.target);
      });
    });

    setTimeout(() => {
      document
        .querySelector("iframe")
        .setAttribute(
          "sandbox",
          "allow-same-origin allow-scripts allow-popups allow-forms"
        );
    }, 3000);

    if (renditionRef.current) {
      // renditionRef.current.on("selected", setRenderSelection);
      // console.log(selections);
      return () => {
        // renditionRef.current.off("selected", setRenderSelection);
      };
    }
  }, [setSelections, selections]);

  return (
    <>
      <NavReading
        onTopicsListClick={() => setIsTopicsListOpen(true)}
        onHighlightClick={() => setIsHighlightListOpen(true)}
      />
      {/*  */}

      <div id="ReadingPage" className="container mx-auto relative h-screen">
        {/* Reader */}
        <ReactReader
          handleTextSelected={handleSelection}
          showToc={false}
          location={location}
          locationChanged={locationChanged}
          url={Ebook}
          styles={ownStyles}
          getRendition={(rendition) => {
            renditionRef.current = rendition;
            renditionRef.current.themes.default({
              "::selection": {
                background: "red",
              },
            });
            setSelections([]);
          }}
          tocChanged={(toc) => (tocRef.current = toc)}
        />
        <div className="absolute bottom-0 green left-0 bg-white text-center w-full z-10 py-2">
          {page}
        </div>
      </div>

      {/* Topic List */}
      <TopicsList
        isOpen={isTopicsListOpen}
        onClose={() => setIsTopicsListOpen(false)}
        topics={tocRef.current}
        renditionRef={renditionRef}
      />

      {/* HighlightList */}
      <HighlightList
        isOpen={isHighlightListOpen}
        onClose={() => setIsHighlightListOpen(false)}
        selections={selections}
        setSelections={setSelections}
        renditionRef={renditionRef}
      />
    </>
  );
}
