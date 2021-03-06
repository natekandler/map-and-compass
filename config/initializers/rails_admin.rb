RailsAdmin.config do |config|

  ### Popular gems integration

  ## == Devise ==
  # config.authenticate_with do
  #   warden.authenticate! scope: :user
  # end
  # config.current_user_method(&:current_user)

  ## == Cancan ==
  # config.authorize_with :cancan

  ## == Pundit ==
  # config.authorize_with :pundit

  ## == PaperTrail ==
  # config.audit_with :paper_trail, 'User', 'PaperTrail::Version' # PaperTrail >= 3.0.0

  ### More at https://github.com/sferik/rails_admin/wiki/Base-configuration
  config.included_models = ["Page", "Category"]
  config.model Page do
    edit do
      field :title
      field :excerpt
      field :content, :froala  do
        html_attributes rows: 20, cols: 50
      end
      field :feature_image
      field :categories
    end

    list do
      field :id
      field :title
    end

    show do
      field :title
      field :excerpt
      field :content
      field :feature_image
    end
  end  

  config.model Category do
    edit do
      field :name
      field :slug
      field :pages
    end

    list do
      field :id
      field :name
      field :slug
    end

    show do
      field :id
      field :name
      field :slug
    end
  end  

  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    show
    edit
    delete
    show_in_app

    ## With an audit adapter, you can add:
    # history_index
    # history_show
  end
end
