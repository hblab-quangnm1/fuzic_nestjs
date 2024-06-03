// Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29

enum SortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

type SortOrder = {
  [key: string]: SortDirection;
};

const UNIT = {
  bit: 'bit',
  kHz: 'kHz',
  MiB: 'MiB',
  GiB: 'GiB',
  px: 'px',
  minute: 'min',
};

export { SortDirection, UNIT };
export type { SortOrder };
