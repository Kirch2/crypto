import React, { useState } from "react";

interface WatchListFormProps {
  loading: boolean;
  label?: string;
  description?: string;
  isPrivate?: boolean;
  onSubmit: (newWatchList: any) => void;
}

export function WatchListForm(props: WatchListFormProps) {
  const { label = "", description = "", isPrivate = false } = props;
  const [watchList, setWatchList] = useState({
    label,
    description,
    user_id: Number(localStorage.user_id),
    private: isPrivate,
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit(watchList);
      }}
    >
      <div className="mb-3">
        <br />
        <input
          value={watchList.label}
          onChange={(e) => {
            setWatchList({
              ...watchList,
              label: e.currentTarget.value,
            });
          }}
          disabled={props.loading}
          required
          type="text"
          placeholder="Label"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <br />

        <input
          value={watchList.description}
          onChange={(e) => {
            setWatchList({
              ...watchList,
              description: e.currentTarget.value,
            });
          }}
          disabled={props.loading}
          required
          type="text"
          placeholder="Description"
          className="form-control"
        />
      </div>
      <div className="mb-1">
        <label>Private</label>
        <input
          checked={watchList.private}
          onChange={(e) => {
            setWatchList({
              ...watchList,
              private: e.currentTarget.checked,
            });
          }}
          disabled={props.loading}
          type="checkbox"
        />
      </div>
      <div className="d-flex justify-content-end">
        <button
          type="submit"
          disabled={props.loading}
          className="btn btn-outline-success"
        >
          Create Watchlist
        </button>
      </div>
    </form>
  );
}
