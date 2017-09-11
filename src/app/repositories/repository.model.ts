export interface Repository {
  name: string;
}

export interface RepositoryWithTags extends Repository {
  tags: string[];
}


export interface Label {
  key: string;
  value: string;
}

export interface ManifestMetadata {
  architecture?: string;
  author?: string;
  created: string;
  docker_version?: string;
  id?: string;
  os?: string;
  labels?: Label[];
}

export interface Manifest {
  name: string;
  tag: string;
  metadata?: ManifestMetadata;
}
