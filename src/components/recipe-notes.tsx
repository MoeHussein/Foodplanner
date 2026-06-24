"use client";

import { useState, useSyncExternalStore } from "react";
import { Save } from "lucide-react";

type RecipeNotesProps = {
  recipeSlug: string;
};

export function RecipeNotes({ recipeSlug }: RecipeNotesProps) {
  const isClient = useSyncExternalStore(
    subscribeToClient,
    getClientSnapshot,
    getServerSnapshot,
  );

  if (!isClient) {
    return <RecipeNotesPlaceholder />;
  }

  return <RecipeNotesEditor recipeSlug={recipeSlug} />;
}

function RecipeNotesEditor({ recipeSlug }: RecipeNotesProps) {
  const storageKey = `foodplanner:recipe-notes:v1:${recipeSlug}`;
  const [notesState, setNotesState] = useState(() => {
    try {
      const storedNote = window.localStorage.getItem(storageKey) ?? "";
      return {
        note: storedNote,
        savedNote: storedNote,
        saveState: storedNote ? ("saved" as const) : ("idle" as const),
      };
    } catch {
      return {
        note: "",
        savedNote: "",
        saveState: "error" as const,
      };
    }
  });
  const { note, savedNote, saveState } = notesState;

  const hasChanges = note !== savedNote;

  function saveNote() {
    try {
      if (note.trim()) {
        window.localStorage.setItem(storageKey, note);
      } else {
        window.localStorage.removeItem(storageKey);
      }
      setNotesState((current) => ({
        ...current,
        savedNote: current.note,
        saveState: "saved",
      }));
    } catch {
      setNotesState((current) => ({
        ...current,
        saveState: "error",
      }));
    }
  }

  const statusText =
    saveState === "error"
      ? "Notes could not be saved in this browser."
      : hasChanges
        ? "Unsaved changes"
        : savedNote
          ? "Saved on this device"
          : "Stored privately in this browser";

  return (
    <section className="notes-card" aria-labelledby="notes-heading">
      <div className="notes-card__header">
        <div>
          <p className="eyebrow">Personal</p>
          <h2 id="notes-heading">Notes</h2>
        </div>
        <span
          className={`notes-card__status${saveState === "error" ? " notes-card__status--error" : ""}`}
          aria-live="polite"
        >
          {statusText}
        </span>
      </div>
      <label className="notes-card__field">
        <span className="sr-only">Cooking notes for this recipe</span>
        <textarea
          maxLength={2000}
          placeholder="What would you change next time?"
          value={note}
          onChange={(event) => {
            setNotesState((current) => ({
              ...current,
              note: event.target.value,
              saveState: "idle",
            }));
          }}
        />
      </label>
      <div className="notes-card__footer">
        <span>{note.length}/2000</span>
        <button
          type="button"
          className="notes-save-button"
          disabled={!hasChanges}
          onClick={saveNote}
        >
          <Save aria-hidden="true" size={16} />
          Save notes
        </button>
      </div>
    </section>
  );
}

function RecipeNotesPlaceholder() {
  return (
    <section className="notes-card" aria-labelledby="notes-heading">
      <div className="notes-card__header">
        <div>
          <p className="eyebrow">Personal</p>
          <h2 id="notes-heading">Notes</h2>
        </div>
        <span className="notes-card__status">Loading saved notes</span>
      </div>
      <div className="notes-card__field">
        <textarea
          aria-label="Cooking notes for this recipe"
          disabled
          placeholder="What would you change next time?"
        />
      </div>
      <div className="notes-card__footer">
        <span>0/2000</span>
        <button type="button" className="notes-save-button" disabled>
          <Save aria-hidden="true" size={16} />
          Save notes
        </button>
      </div>
    </section>
  );
}

function subscribeToClient() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}
