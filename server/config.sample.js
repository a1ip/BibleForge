/**
 * BibleForge
 *
 * @date    05-15-12
 * @version alpha (α)
 * @link    http://BibleForge.com
 * @license GNU Affero General Public License 3.0 (AGPL-3.0)
 * @author  BibleForge <info@bibleforge.com>
 */

/**
 * Copyright (C) 2012
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see http://www.opensource.org/licenses/AGPL-3.0.
 */

/// Set JSLint options.
/*jslint node: true, indent: 4, white: true */

/*properties
    base, cache_simple_html, config, db, host, pass, port, static_path, use_ssl, 
    user
*/

"use strict";

this.config = {
    cache_simple_html: true, /// Whether or not to cache the contents of index_non-js.html.  Should be TRUE on production servers.
    /// The database options.
    db: {
        host: "127.0.0.1", /// The hostname to connect to
        user: "user",      /// The database username
        pass: "password",  /// The user's password
        base: "bf"         /// The database name
    },
    use_ssl: false, /// Whether or not to use SSL (partially implemented)
    port: 7777,     /// The port for the BibleForge server to listen to.  This is the port that HTTP server forwards requests to, no the port of the HTTP server.
    static_path: "../client/" /// The folder containing files sent to the client.  The server also includes some of them.
};
