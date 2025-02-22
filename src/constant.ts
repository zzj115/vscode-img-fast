'use strict';
import * as path from 'node:path';

export const PLUGIN_PUBLISHER = "lvboda";

export const PLUGIN_FULL_NAME = "vscode-img-fast";

export const PLUGIN_NAME = "img-fast";

export const COMMAND_UPLOAD_KEY = `${PLUGIN_NAME}.upload`;

export const COMMAND_DELETE_KEY = `${PLUGIN_NAME}.delete`;

export const REPOSITORY_URL = "https://github.com/lvboda/vscode-img-fast";

export const IMAGE_DIR_PATH = path.resolve(__dirname, "images");

export const RECORD_FILE_PATH = path.resolve(__dirname, "records.json");