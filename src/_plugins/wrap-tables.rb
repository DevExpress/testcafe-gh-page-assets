require 'redcarpet'

class Redcarpet::Render::HTML
    def table(header, body)
        "<div class=\"table-wrapper\"><table><thead>#{header}</thead><tbody>#{body}</tbody></table></div>"
    end
end