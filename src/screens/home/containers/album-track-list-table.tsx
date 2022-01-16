import { Table } from '@components/table/table';
import React from 'react';
import { useGetAlbumTracks } from '@screens/home/hooks/use-get-album-tracks';
import { TrackListTableBodySekeleton } from '@screens/home/components/track-list-table-body-sekeleton';

interface AlbumTrackListTableProps {
  releaseYear: number;
  trackListApiUrl: string;
}

const TrackListTableBody = (props: AlbumTrackListTableProps) => {
  const { releaseYear, trackListApiUrl } = props;

  const [{ hookData: trackList = [], isLoading }] = useGetAlbumTracks(trackListApiUrl);

  if (isLoading) {
    return <TrackListTableBodySekeleton />;
  }
  //todo: fix table on smaller screens
  //todo: fix UI shifting when table size changes
  return (
    <Table.Body>
      {trackList.map((item, index) => {
        const { artist, duration = 0, title, title_short, id } = item;
        const minutes = Math.floor(duration / 60);
        const seconds = duration - minutes * 60;
        const formatedSeconds = ('0' + seconds).slice(-2);
        return (
          <Table.BodyRow key={id}>
            <Table.RowCell>{index + 1}</Table.RowCell>
            <Table.RowCell>{title_short || title}</Table.RowCell>
            <Table.RowCell>{artist?.name}</Table.RowCell>
            <Table.RowCell>{`${minutes}:${formatedSeconds}`}</Table.RowCell>
            <Table.RowCell>{releaseYear}</Table.RowCell>
          </Table.BodyRow>
        );
      })}
    </Table.Body>
  );
};

export function AlbumTrackListTable(props: AlbumTrackListTableProps) {
  const { releaseYear, trackListApiUrl } = props;
  return (
    <Table>
      <Table.Header>
        <Table.HeaderRow>
          <Table.HeaderCell>#</Table.HeaderCell>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Artist</Table.HeaderCell>
          <Table.HeaderCell>Time</Table.HeaderCell>
          <Table.HeaderCell>Released</Table.HeaderCell>
        </Table.HeaderRow>
      </Table.Header>

      {trackListApiUrl && <TrackListTableBody releaseYear={releaseYear} trackListApiUrl={trackListApiUrl} />}
    </Table>
  );
}
