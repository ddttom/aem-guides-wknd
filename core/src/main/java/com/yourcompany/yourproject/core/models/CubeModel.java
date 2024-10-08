package com.yourcompany.yourproject.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Inject;
import org.apache.sling.models.annotations.Optional;
import java.util.List;

@Model(adaptables = Resource.class)
public class CubeModel {

    @Inject
    @Optional
    private List<CubeFace> faces;

    public List<CubeFace> getFaces() {
        return faces;
    }

    public static class CubeFace {
        private String image;
        private String link;

        public String getImage() {
            return image;
        }

        public String getLink() {
            return link;
        }
    }
}